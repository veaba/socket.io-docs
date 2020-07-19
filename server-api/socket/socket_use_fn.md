## socket.use(fn)

- `fn` (Function)

注册一个中间件，它是一个为每个传入数据`包`执行并作为参数接收数据包的函数，以及一个可选地推迟执行到下一个注册的中间件的函数。

传递到中间件回调的错误作为特殊`error`包发送到客户端。

```js
io.on('connection',(socket)=>{
    socket.use((packet,next)=>{
        if (packet.doge===true) return next()
        next (new Error('Not a doge error'));
    })
})
```