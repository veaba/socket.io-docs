## socket.id

- (String)

socket会话的唯一标识符。在触发`connect`事件后设置，并在`reconnect`事件后更新。

```js
const socket= io('http://localhost');

console.log(socket.id) //undefined

socket.on('connect',()=>{
    console.log(socket.id) // xxxx...
})
```