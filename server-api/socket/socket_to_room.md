## socket.to(room)

- `room` (String)
- **Returns** 连接的socekt

为后续事件设置一个修饰符，该事件将仅广播给已加入给定`房间`的客户端（socket本身被排除）。要发送到多个房间，可以多次调用。

要发送到多个房间，可以多次调用。

```js
io.on('connection',socket=>{
    // 到一个房间
    socket.to('others').emit('an event',{some:"data"});

    // 到多个房间
    socket.to('room1').to('room2').emit('hello');

    // 发送私信到另外一个socket
    socket.to(/*另外一个socket id*/).emit('hey');

    // 警告：` socket.to（socket.id）.emit（）`将不起作用，因为它将发送给房间中的每个人
    // 名为“socket.id”，但为发件人。请改用经典的“socket.emit（）”。
})
```

**注意**：广播时不支持确认。