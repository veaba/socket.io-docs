## server.adapath([value])

- `value`(Adapter)
- **Returns** `Server|Adapter`

设置适配器`值`。默认为socket.io随附的基于内存的`Adapter`实例。见[socket.io-adapter](https://github.com/socketio/socket.io-adapter)
。如果没有提供参数，此方法将返回当前值。

```js
const io= require('socket.io')(3000);
const redis= require('socket.io-redis');

io.adapter(redis({host:"localhost",port:6379}));
```