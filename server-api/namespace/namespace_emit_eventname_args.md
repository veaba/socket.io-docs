## namespace.emit(eventName[, …args])

- `eventName` (String)
- `args`

向所有连接的客户端emit事件,以下方法两个是等同的：

```js

const io= require('socket.io')();
io.emit('an event send to all connected clients'); //主命名空间

const chat = io.of('/chat');
chat.emit('an event send to all connected clients in chat namespace');
```

**注意**:从命名空间发出时不支持确认。



