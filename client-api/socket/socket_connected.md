## socket.conneted

- (Boolean)

socket是否连接到服务器。

```js
const socket= io('http://localhost');
socket.on('connect',()=>{
    console.log(socket.connected) //true
})
```