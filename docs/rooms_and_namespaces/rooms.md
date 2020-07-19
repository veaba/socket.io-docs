## 房间

在每个名称空间中，还可以定义`sockets`可以`join(加入/连接)`和`level(离开)`的任意通道。

### 加入或离开

可以调用`join`来订阅给定通道的 `socket`

```js
io.on('connection',socket=>{
    socket.join("some room")
})
```

然后在广播或者emit时，简单地使用 `to` 或 `in`（两者是相同）：

```js
io.to('some room').emit('some event');
```

离开该频道，请以与`join`的相同的方式调用`level`:

```js
io.level("some room")
```

### 默认房间

Socket.io中的每`Socket`都由一个随机的、不可访问的、唯一的标识符`Socket#id`标识。为了方便起见，每个socket都自动加入由该id标识的房间。


这使得向其他socket 广播消息变得容易：

```js
io.on('connection',(socket)=>{
    socket.io('say to someone',(id,msg)=>{
        socket.broadcast.to(id).emit("my message",msg)
    })
})
```

### 断开

断开连接后，sockets 会自动离开它们所属的所有通道，不需要进行特殊处理。

