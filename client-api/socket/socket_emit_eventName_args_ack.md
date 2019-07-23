## socket.emit(eventName[,...args][,ack])

- `eventName` (String)
- `args`
- `ack` (Function)
- **Return** `Socket`

向字符串名称标识的socket发出事件。可以包括任何其他参数。支持所有可序列化的数据结构，包括`Buffer。

```js
socket.emit('hello','world');
socket.emit('with-binary',1,'2',{3:"4",5:new Buffer(6)});

```

`ack`参数是可选的，将通过服务器应答调用。

```js
socket.emit('ferret','tobi',data=>{
    console.log(data) // data 将是 'woot'
})

// 服务器：

// io.on('connection',socket=>{
//     socket.on('ferrec',(name,fn)=>{
//         fn('woot');
//     })
// })

```