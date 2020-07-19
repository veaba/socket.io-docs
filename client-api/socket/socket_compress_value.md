## socket.compress(value)

- `value` (Boolean)
- **Returns** `Socket`

为后续事件发送设置一个修饰符，该修饰符只在值为`true`时压缩事件数据。不调用方法时默认为`true`。


```js
socket.compress(false).emit('an event',{some:"data"});
```
