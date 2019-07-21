## namespace.use(fn)

- `fn` (Function)

注册一个中间件，它是一个为每个传入Socket 执行的函数，并作为参数接收socket和一个函数，以选择将执行推迟到下一个注册的中间件。

传递到中间件回调的错误作为特殊错误包发送到客户端。

```js
io.use((socket,next)=>{
    if (socket.request.header.cookie) return next();
    next(new Error('authentication error'));
})

```