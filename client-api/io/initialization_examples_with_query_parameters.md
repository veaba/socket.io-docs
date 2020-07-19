## 初始化示例：带查询参数

```js
const socket= io('http://localhost?token=abc');

// 服务端
const io= require('socket.io')()

// 中间件
io.use((socket,next)=>{
    const token = socket.handshake.query.token;
    if (isValid(token)){
        return next();
    }
    return next(new Error("authentication error"))
});

// 然后

io.on('connection',socket=>{
    const token= socket.handshake.query.token
})

```