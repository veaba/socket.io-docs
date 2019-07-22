## Flag:'binary'

指定发出的数据中是否存在二进制数据。指定时提高性能。可以是`true`的也可以是`false`的。

```js

const io=require('socket.io')();
io.on('connection',socket=>{
    socket.binary(false).emit('an event',{some:"data"}) // 要发送的数据没有二进制数据
})

```