## 在节点之间传递事件

既然您有多个Socket.IO节点可以接受连接，那么如果您想向每个人（甚至是某个 [房间](https://socket.io/docs/rooms-and-namespaces/#Rooms) 中的每个人）广播事件，那么就需要在进程或计算机之间传递消息。

负责路由消息的接口就是我们所称的`Apdapter`。您可以在 [socket.io-adapter](https://github.com/socketio/socket.io-adapter) 上实现自己的（通过从socket.io-adapter继承），也可以使用我们在[redis](https://redis.io/)上提供的：[socket.io-redis](https://github.com/socketio/socket.io-redis):

```js

const io = require('socket.io')(3000)
const redis = require('socket.io-redis');
io.adapter(redis({host:"localhost",port:6379}));

```
