## socket.join(room[, callback])

- `room` (String)
- `callback`(Function)
- **Returns** 连接的`Socket`


将客户端添加到`room`中，并根据需要触发带有`err`签名（如果有）的回调。

```js
i.on('connection',(socket)=>{
    socket.join('room 237',()=>{
        let rooms= Object.keys(socket.room);
        console.log(rooms); // [ <socket.id>, 'room 237' ]
        io.to("room 237").emit('a new ueser has joined the room'); // 广播给房间里的每个人
    })
})
```
连接室的机制由已配置的`Adapter`（参见上面的 `Server#adapter`）处理，默认为[socket.io-adapter](https://github.com/socketio/socket.io-adapter)。

为了您的方便，每个socket自动连接由其ID标识的房间（请参见`Socket#id`）。这使得向其他socket广播消息变得容易：

```js
io.on('connection',(socket)=>{
    socket.on('say to someone',(id,msg)=>{
        // 使用给定的ID向socket发送私有消息
        socket.to(id).emit("my message",msg)
    })
})
```