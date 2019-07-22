## Event:'error'

- `error` (Object) 错误对象

发生错误时触发。

```js
io.on('connection',socket=>{
    socket.on('error',error=>{
        //
    })
})

```