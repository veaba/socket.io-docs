
## `Socket.io` 并不是webSocket
Socket.IO不是WebSocket实现。 尽管Socket.IO确实在可能的情况下使用WebSocket作为传输，但它会为每个数据包添加一些元数据：数据包类型，命名空间和需要消息确认时的确认ID。 这就是为什么WebSocket客户端无法成功连接到Socket.IO服务器，而Socket.IO客户端也无法连接到WebSocket服务器。 请在此处查看协议规范。[请戳>](https://github.com/socketio/socket.io-protocol)

```js
// 警告：这个客户端将不支持连接！
const client= io('ws://echo.websocket.org');

```