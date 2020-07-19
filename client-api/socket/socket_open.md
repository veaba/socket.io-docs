## socket.open()

- **Returns** `Socket`

手动打开socket

```js
const socket=io({
    autoConnect:false
})

// ...
socket.open()
```

它还可用于手动重新连接：

```js
socket.on('disconnect',()=>{
    socket.open()
})

```