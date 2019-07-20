## 在节点之间传递事件

既然您有多个Socket.IO节点可以接受连接，那么如果您想向每个人（甚至是某个 [房间](https://socket.io/docs/rooms-and-namespaces/#Rooms) 中的每个人）广播事件，那么就需要在进程或计算机之间传递消息。

负责路由消息的接口就是我们所称的`Apdapter`。您可以在 [socket.io-adapter](https://github.com/socketio/socket.io-adapter) 上实现自己的（通过从socket.io-adapter继承），也可以使用我们在[redis](https://redis.io/)上提供的：[socket.io-redis](https://github.com/socketio/socket.io-redis):

```js

const io = require('socket.io')(3000)
const redis = require('socket.io-redis');
io.adapter(redis({host:"localhost",port:6379}));

```

如下调用：

```js
io.emit('hi',"all sockets")
```

将通过redis的[发布/订阅机制](https://redis.io/topics/pubsub)广播到每个节点。


**注意**：使用Redis适配器时仍然需要粘性会话。

如果您想通过`non-socket.io`进程将消息传递给它，您应该考虑[“从外部世界发送消息”](https://socket.io/docs/rooms-and-namespaces/#Sending-messages-from-the-outside-world)。

