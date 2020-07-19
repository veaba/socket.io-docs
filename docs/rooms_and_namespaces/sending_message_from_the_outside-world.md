## 从外界发送消息

在某些情况下，您可能希望从socket.io进程上下文之外向socket.io命名空间/房间中的socket发出事件。有几种方法可以解决这个问题，比如实现自己的通道来向流程发送消息。

为了方便这个用例，我们创建了两个模块：

- [socket.io-redis](https://github.com/socketio/socket.io-redis)
- [socket.io-emitter](https://github.com/socketio/socket.io-emitter)

通过实现Redis 适配器：

```js
const io= require('socket.io')(3000);
const redis= require('socket.io-redis');

io.adapter(redis({host:"localhost",port:6379}))
```

然后，您可以从任何其他进程向任何通道发送消息。

```js
const io=require('socket.io-emitter')({host:'127.0.0.1',port:6379});
serInterval(()=>{
    io.emit('time',new Date())
},5000)
```

