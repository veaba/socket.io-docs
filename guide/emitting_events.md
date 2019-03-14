- `behind 背后`
- `prevents 放置` 

> 使用`socket.io`推送二进制的文件，比如音频、视频等，emmm，突然想到我那个项目。https://github.com/veaba/express-nuxt，里面涉及到一个live 的page，可以翻译LOL 的视频直播字幕的转换，期待。。

## 发送事件

`socket.io`背后的主要思想是：你可以使用你想要的任何数据发送和接受你想要的任何事件，比如可以编码为json的对象，甚至也支持二进制数据。


让我们这样做，以便当用户键入消息时，服务器将其作为聊天消息事件获取。 `index.html`中的`scripts`部分现在应该如下所示：

```html
<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(e){
      e.preventDefault(); // prevents page reloading 放置页面重新加载
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script>
```

然后， 在`index.js`中，我们打印出来`chat message` 事件：

```js
    io.on('connection',(socket)=>{
        socket.on('chat message',(msg)=>{
            console.log('message:'+msg)
        })
    })
```


>提醒，关于以上代码的路径，是实际开发中，存在偏差，主要是jquery的路基，如果是本地文件，则需要做一层设置，以下为笔者的设置：


在`index.js`中，增加一个`static`目录，存放`jquery`的本地文件
```js
    app.use(express.static('test/static'))
```

在 `index.html`中
```html
<script src="/socket.io/socket.io.js"></script><!--这个部分，在node端，会添加一层中间期间给它自己-->
<script src="jquery-1.11.1.js"></script>
```

结果将会像这个video展示的一样：https://i.cloudup.com/transcoded/zboNrGSsai.mp4

