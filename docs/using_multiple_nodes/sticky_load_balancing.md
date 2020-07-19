## 粘性负载均衡

如果计划在不同的进程或机器之间分配连接负载，则必须确保与特定会话ID关联的请求连接到发起它们的进程。


这是由于某些传输（如xhr轮询或jsonp轮询）依赖于在“socket”的生命周期内触发多个请求。如果不启用粘性负载均衡，这将导致很可怕：


```txt

Error during WebSocket handshake: Unexpected response code: 400

```

这意味着升级请求被发送到一个未知socket id的节点，因此是HTTP 400响应。

为了说明为什么需要这样做，请考虑向所有连接的socket发出事件的示例：

```js

io.emit('hi',"all sockets")

```

很有可能这些socket中的一些可能有一个活动的双向通信通道，比如`WebSocket`，我们可以立即对其进行写入，但其中一些socket可能正在使用长轮询。

如果他们使用的是长轮询，那么他们可能已经或可能没有发送一个我们可以写入的请求。他们可能在这些请求之间。在这些情况下，这意味着我们必须在进程中缓冲消息。为了让socket在发送请求时成功地声明这些消息，最简单的方法是将连接路由到同一进程。


如上所述，`WebSocket`传输没有这个限制，因为基础TCP连接在socket和给定服务器之间保持打开状态。这就是为什么你可能会找到一些只使用`WebSocket`传输的建议：


```js
const client = io('https://io.yourhost.com',{
    //警告：在这种情况下，没有回滚到长轮询
    transports:["websocket"] //  或者 [ 'websocket', 'polling' ], 这两者都一样
})
```

这两种方法都意味着，当无法建立WebSocket连接时，不会出现长轮询回退，这实际上是socket.io的关键功能之一。在这种情况下，您应该考虑使用原始[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)，或者像[robust-WebSocket](https://github.com/appuri/robust-websocket)那样的包装器。


为了实现粘性会话，有两个主要解决方案：

- 基于起始地址路由客户端
- 基于cookie路由客户端

