## Flag:'broadcast'

为后续事件设置一个修饰符，该修饰符使事件数据仅广播到除发送方之外的每个socket。

```js
io.on('connection',socket=>{
    socket.broadcast.emit('an event',{some:"data"}) // 除了发送者，其他人都能收到
})

```