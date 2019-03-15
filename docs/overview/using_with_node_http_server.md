## 与`Node` HTTP 服务一起使用

### Server(app)，服务端

```js
const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const fs = require('fs')

app.listen(80)

function handler(req,res){
    fs.readFile(__dirname+'/index.html',(err,data)=>{
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html,server error!')
        }
        res.writeHead(200);
        res.end(data)
    }),
}

io.on('connection',(socket)=>{
    socket.emit('news',{hello:'world'})//发送个客户端消息
    socket.on('my other event',(data)=>{
        console.log(data)//收到的消息
    })
})
```

### Client(index.html)，客户端

```html
<script src="/socket.io/socket.io.js"></script>
<script>
    const socket=io('http://localhost');//这里一定要http开头，因为socket.io不是websocket实现的
    socket.on('news',(data)=>{
        console.log(data)//收到服务器emit的消息
        socket.emit('my other event',{my:'data'})//完成了一次消息互换
    })
</script>  
```