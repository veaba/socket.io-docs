## Event:'disconnecting'

- `reason` (String) 断开连接的原因（客户端或服务器端）

当客户端将要断开连接（但尚未离开其`房间`）时触发。


```js

io.on('connection',socket=>{
    socket.on('disconnecting',reason=>{
        let rooms= Object.keys(socket.rooms)
    })
})
```

这些是保留的事件（连同`connect`、`newlistener`和`removelistener`），不能用作事件名称。