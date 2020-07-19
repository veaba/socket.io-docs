## socket.binary(value)

指定发出的数据是否包含二进制。指定时提高性能。可以是`true`的也可以是`false`的。

```js
socket.binary(false).emit('an event',{some:"data"});
```