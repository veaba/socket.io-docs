## socket.emit(eventName[,...args][,ack])

(覆盖 EventEmitter.emit)

- `eventName` (String)
- `args`
- `ack` (Function)
- **Returns** `Socket`

向字符串名称标识的socket发出事件。可以包括任何其他参数。支持所有可序列化的数据结构，包括`Buffer`。

```js
scoket.emit('hello',"world");
socket.emit('with-binary',1,'2',{3:'4',5:new Buffer(6)});
```

`ack`参数是可选的，将用客户端的应答调用。

```js

io.on('connection',socket=>{
    socket.emit('an event',{some:"data"});

    socket.emit('ferret','tobi',(data)=>{
        console.log(data);// 数据将会是 “woot”
    })

    // 客户端代码

    // client.on('ferret',(name,fn)=>{
        fn("woot")
    })
}
```