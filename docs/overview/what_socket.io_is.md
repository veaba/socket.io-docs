## 啥是`Socket.io`

`Socket.io`是一个类库，可以在浏览器与服务器之间实现实时、双向、基于事件的通信，它包括：
- 一个`Node.js` 服务: [源码](https://github.com/socketio/socket.io) | [官方en_Server_API](https://socket.io/docs/server-api/) | [民间cn_Server_API](https://socket.gitbook.io/docs/)
- 一个在浏览器上的Javascript客户端库(也可以从Node.js运行)：[源码](https://github.com/socketio/socket.io-client) | [官方en_Client_API](https://socket.io/docs/client-api/) | [民间en_Client_API](https://socket.gitbook.io/docs/)

主要特点是：

### 可靠性

即使存在以下情况也会重新连接：

- 代理和负载均衡器
- 个人防火墙和防病毒软件

为此，它依赖在`Engine.IO`，它首先建立一个长轮询连接，然后尝试升级到更好的传输通道，这些传输在另外一边被`tested`，比如`websocket`。有关更多的信息，请参与目标部分，[戳此>](https://github.com/socketio/engine.io#goals)。

### 支持自动重连

除非得到指令，否，断开客户端会无限重连。直到服务器再次可以可用，请在此处查看可用的更多选项，[戳此>](https://socket.io/docs/client-api/#new-Manager-url-options)

### 断连检测

在`Engine.IO`级别实现心跳机制，允许服务器和客户端直知道另一方何时不响应。

通过在服务器和客户端上设置定时器来实现该功能，在连接握手期间，共享超时值(`pingInterval` 和 `pingTimeout` 参数)，这些定时器需要将任何后续客户端调用定向到同一个服务器，因此在使用多个节点时会出现 `sticky-seesion`（沾性会话）要求。

### 支持二进制

任何可序列化的数据结构都可以被发送， 包括：

- 浏览器中的 `ArrayBuffer`(数组缓存) 和 `Blob`(二进制大文件) 
- Node.js中的 `ArrayBuffer`和`Buffer`缓存

### 支持多路复用

为了在应用程序中创建关注点分离（例如，每个`module`(模块)或者基于权限），`Socket.io` 允许你创建多个`Namespaces`(命名空间)，这些命名空间将充当单独的通信通道，但也会共享相同的底层连接。

### 支持房间

在每个`namespace`中，你可以定义`sockets`，可以加入或者离开任意频道，成为`Rooms`（房间），然后你可以广播到已任何指定的房间，可以发送到已加入的每个`socket`成员。

这是一个非常有用的功能，可以将通知发送给一组用户，或者发送给连接在多个设备上的指定用户。

这些功能带有一个简单方便的API，如下所示：

```js
io.on('connection',(socket)=>{
    socket.emit('request',/**/)//发送一个事件给socket
    io.emit('broadcast',/**/) // 发送一个事件给全部连接着的socket
    socket.on('reply',()=>{/**/}) //监听事件
})
```