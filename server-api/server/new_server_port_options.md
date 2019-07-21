## new Server(port[,options])

- `prot`(Number) 监听的端口(创建新的`http.server`)

- `options`(object)

请参阅[上面](https://socket.io/docs/server-api/#new-Server-httpServer-options)的可用选项列表。

```js
const io=require('socket.io')(3000,{
    path:'/test',
    serverClient:false,
    // 下面是 engine.IO的选项
    pingInterval:10000,
    pingTimeout:5000,
    cookie:false
})
```