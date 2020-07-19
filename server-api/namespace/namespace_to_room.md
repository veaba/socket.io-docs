## namespace.to(room)

- `room` (String)
- **Returns** `Namespace` 用于连接

为后续事件设置一个修饰符，该事件将仅广播给已加入指定的`room`客户端。

要emit到多个房间，可以多次调用。

```js
const io = require('socket.io')();
const adminNamespace=io.of('/admin');

adminNamespace.to('level1').emit('an event',{some:"data"});
```