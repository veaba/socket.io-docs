## 发送和获取数据(确认) 

有时，您可能希望在客户端确认消息接收时收到回调。

为此，只需将函数作为`.send`或`.emit`的最后一个参数传递。 更重要的是，当你使用`.emit`时，确认是由你完成的，这意味着你也可以传递数据：

### Server(app.js)
```js
    const io= require('socket.io')(80)
    io.on('connection',socket=>{
        socket.on('ferret',(name,word,fn)=>{
            fn(name+'says'+word)
        })
    })
```

### client(index.html)
```html

<script>
    const socket= io()
    socket.on('connect',()=>{
        socket.emit('ferrect','tobi','woot',(data)=>{
            console.log(data)//应该是 'tobi says woot'
        })
    })
</script>
```
