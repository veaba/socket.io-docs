## socket.rooms

- (Object)

标识此socket所在房间的字符串哈希，按房间名称索引。

```js
io.on('connection',(socket)=>{
    socket.join('room 237',()=>{
        let rooms= Object.keys(socket.rooms)
        console.log(rooms); // [ <socket.id>,"room 237" ]
    })
})
```