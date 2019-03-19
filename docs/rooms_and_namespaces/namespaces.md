
- `essentially  本质上`
- `assigning 分配`
- `minimize 减少`
- `identified `
- `short form 简写`
## 命名空间

`Socket.io`允许你 “namespace”你的`sockets`，这实际上意味着分配不同的端点或路径。
这是一个有用的功能，可以最大限度地减少资源（TCP连接）的数量，同时通过在通信通道之间引入分离来分离应用程序中的问题。

### 默认命名空间

我们调用默认名称空间`/`它是默认情况下连接到的一个`Socket.IO`客户端，以及默认情况下服务器监听的那个。

此命名空间由`io.sockets`或简单地`io`标识为：

```js
//以下都被emit到所有socket连接
io.sockets.emit('hi','everyone');
io.emit('hi','everyone')//简写
```

### 自定义命名空间

要设置自定义命名空间，可以在服务端调用`of`函数

```js
const nsp= io.of('/my-namespace');
nsp.on('connection',(socket)=>{
    console.log('some connected')
})
nsp.emit('hi','everyone')
```

在客户端，你告诉`Socket.IO`客户端连接到该命名空间：

```js
const socket= io('/my-namespace')
```

> *重要提示*：命名空间是`Socket.IO`协商的实现细节，与底层传输的实际URL无关，默认为：`/socket.io/...`