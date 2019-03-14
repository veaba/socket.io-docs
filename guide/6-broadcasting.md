- `broadcasting 广播` 
- `the rest 其余`
- `in order to 为了`
- `except 除了`
- `certain 某些`
- `in the case 在这种情况下`
- `for the sake of simplicity 为了简单起见`
- `capture  捕获`
- `total 全部`
- `amounts `

## 广播

下一个目标是让我们从服务器向其他用户发送事件

为了发送一个事件给所有人，`socket.io`给我们提供了`io.emit`:

```js
io.emit('some event',{for:'hey gay! to everyone'})
```

如果你想向除了某些`socket`以外的所有人发送消息，我们有`broadcasting`广播标志：

```js
// TODO 不懂~
io.on('connection',(socket)=>{
    socket.broadcast.emit('hi')
})
```
如图，刷新中间的窗口，服务器则向左右两侧的窗口推送消息：

![广播](/images/broadcast.png)

在这种情况下。为了简单起见，我们会将消息发送给所有人，包括发件人

```js
io.on('connection',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })
})
```

在客户端，大概我们捕获到聊天消息，我们会将其也包含在页面中，现在客户端的JS代码：

```js
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(e){
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
    });
  });
</script>
```

这就是完成了我们的聊天应用程序，大约20行代码！它就是这样子：

> mp4 ：https://i.cloudup.com/transcoded/J4xwRU9DRn.mp4

![mp4](https://i.cloudup.com/transcoded/J4xwRU9DRn.mp4)

