## socket.compress(value)

- `value` (Boolean) 是否压缩以下数据包
- **Returns** 连接`socket`

为后续事件设置一个修饰符，该修饰符只在值为`true`时压缩事件数据。不调用方法时默认为`true`。

```js
io.on('connection',socket=>{
    socket.compress(false).emit('uncompressed',"that's rough")
})
```