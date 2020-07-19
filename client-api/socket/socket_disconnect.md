## socket.disconnected

- (Boolean)

socket是否与服务器断开连接。

```js
const socket=io('http://localhost');
socket.on('connect',()=>{
    console.log(socket.disconnected);// false
})
```