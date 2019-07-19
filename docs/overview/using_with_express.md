## 在`express`中使用`Socket.io`
### Server(app.js)
```js
const app= require('express')()
const server = require('http').Server(app);
const io = require('socket.io')(server)

server.listen(80)
// 警告：app.listen(80)在这里没起作用，可能有端口被占用情况

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    socket.emit('news',{hello:'world'}
    socket.on('my other event',(data)=>{
        console.log(data)
    })
})
```
### Client(index.html)

```html
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket= io.connect('http://localhost')
    socket.on('news',(data)=>{
        console.log(data)

        socket.emit('my other event',{my:'data'})
    })
</script>

```