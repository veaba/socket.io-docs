## 类似跨浏览器Websocket

如果您只想要WebSocket语义，那么您也可以这样做。 只需利用`send`和监听`message`事件：

### Serve(app.js)
```js
const io = require('socket.io')(80)
io.on('connection',(socket)=>{
    socket.on('message',()=>{})
    socket.on('disconnect',()=>{})
})
```

### Client(index.html)

```html
<script>
    const socket=io('http://localhost/');
    socket.on('connect',()=>{
        socket.send('hi')
    })
    socket.on('message',(msg)=>{})
</script>
```

如果您不关心重新连接逻辑等，请查看`Engine.IO`，它是Socket.IO使用的WebSocket语义传输层。
