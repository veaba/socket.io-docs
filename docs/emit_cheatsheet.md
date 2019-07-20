## emit备忘单

```js
io.on('connect',onConnect)

function onConnect(){
    // 发消息到客户端
    socket.emit('hello',"can you hear me?",1,2,"abc");

    // 发送到是所有客户端除了发送者
    socket.broadcast.emit("boradcast","hello friends!");
    
    // 发送到 “game” room中除发件人以外的所有客户端
    socket.to("game").emit("nice game","let't play a game");

    // 发送到“game1”和/或“game2”房间中的所有客户端，发件人除外
    socket.to('game1').to('game2').emit("nice game","let's play a game (too)");

    // 发送给“游戏”室中的所有客户，包括发件人
    io.in('game').emit('big-announcement',"the game will start soon");

    // 发送到命名空间“mynamespace”中的所有客户端，包括发件人
    io.of('myNamespace').emit('bigger-announcement',"the tournament will start soon");

    // 发送到特定命名空间中的特定房间，包括发件人
    io.of('myNamespace').to('root').emit('event',"message");

    // 警告：`socket.to(socket.id).emit()` ,不会工作，因为它会发送给房间里的每个人
    // 命名 `socket.id` ，但为发件人。请改用经典的“socket.emit（）”。

    // 带确认发送
    socket.emit('question',"do you think so?",(answer)=>{

    })

    // 不压缩发送
    socket.compress(false).emit('uncomressed',"that's rough");

    // 指定要发送的数据是否具有二进制数据
    socket.binary(false).emit('what',"I hava no binaries!");

    // 发送到此节点上的所有客户端（使用多个节点时
    io.local.emit('hi',"my lovely babies");

    // 发送到所有连接的客户端
    io.emit('an event send to all connected clients';)

}

```

**注意**：以下事件是保留的，应用程序不应将其用作事件名称：

- `erorr`
- `connect`
- `disconnect`
- `disconnecting` 
- `newListener`
- `removeListener`
- `ping`
- `pong`

