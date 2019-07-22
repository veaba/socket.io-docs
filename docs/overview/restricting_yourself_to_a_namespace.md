`restricting 限制`

## 限制自己使用命名空间

如果您可以控制为特定应用程序发出的所有消息和事件，则使用默认/命名空间。 如果您想利用第三方代码，或生成与其他人共享的代码，socket.io提供了一种命名空间socket的方法。

这具有`多路复用`单个连接的优点。 而不是使用两个`WebSocket`连接的socket.io，它将使用一个。

### Server (app.js)
```js
const io = require('socket.io')(80)
const chat = io
    .of('/chat')
    .on('connection',(socket)=>{
        socket.emit('a message',{
            that:'only',
            '/chat':'will get'
        })
        chat.emit('a message',{
            everyone:'in',
            '/chat':'will get'
        })
    })
    const news = io
    .of('/news')
    .on('connection',socket=>{
        socket.emit('item',{news:'item'})
    })
```

### Client (index.html)

```html
<script>
    const chat = io.connection('http://localhost/chat')
    const news = io.connection('http://localhost/news')
    chat.on('connect',()=>{
        chat.emit('hi~')
    })
    news.on('news',()=>{
        news.emit('wowo~')
    })
</script>
```