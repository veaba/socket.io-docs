## server.close([callback])

- `callback`(Function)

关闭socket.io服务器。`callback(回调)`参数是可选的，将在关闭所有连接时调用。

```js
const Server= require('socket.io');
const PORT=3030;
const server= require('http').Server()

const io= Server(PORT);

io.close() //关闭当前的服务器

server.listen(PORT);// 释放端口

io=Server(server);

```


