## 发送易失性的消息

有时可以删除某些消息。 假设您有一个应用程序，显示关键字`bieber`的实时推文。

如果某个客户端尚未准备好接收消息（由于网络速度缓慢或其他问题，或者因为它们通过长轮询连接并处于请求 - 响应周期的中间），如果它没有收到所有推文 与bieber相关的申请不会受到影响。

在这种情况下，您可能希望将这些消息作为易失性消息发送。


### Server

```js
var io = require('socket.io')(80);

io.on('connection',socket=>{
    const tweets = setInterval(()=>{
        // getBieberTweet??
        getBieberTweet(tweet=>{
            socket.volatile.emit('bieber tweet',tweets)
        })
    },100)
    socket.on('disconnect',()=>{
        clearInterval(tweets)
    })
})
```