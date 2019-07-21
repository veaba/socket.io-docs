## new Server(options)

- `options` (object)

请参阅[上面](https://socket.io/docs/server-api/#new-Server-httpServer-options)的可用选项列表。

```js
const io = require('socket.io')({
    path:'/test',
    serverClient:false
})

// 或者
const server= require('http').createServer();

io.attach(server,{
    pingInterval:10000,
    pingTimeout:5000,
    cookie:false
})

server.listen(3000);

// 或者
io.attach(3000,{
        pingInterval:10000,
    pingTimeout:5000,
    cookie:false
})

```