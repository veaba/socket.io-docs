
> TODO:后续，极限测试socket.io 能够支持多少条connection同时连接

- `composed 组成`
- `exposes 暴露` 
- `several 一些` 

## 集成 socket.io

socket.io 是由两个部分组成：

- 一个与node.js HTTP 服务继承的服务器:socket.io
- 一个在浏览器端加载的客户端库：socket.io-client

开发期间，`socket.io` 会自动为我们服务，正如我们将看到的，因为只需安装一个模块：

```shell
npm install --save socket.io
```

会安装模块并将依赖项添加到`package.json`中，现在，让我们编辑`index.js`来添加它：


```js
const app = require('express')()
const http = require('http').Server(app)//这里必须绑定在http实例上而不是app上
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log(socket)
    console.log('id',socket.id)//每次connect 的id都不一样
    console.log('a user connected')
})

http.listen(3000,()=>{
    console.log('listening on * :3000')
})
```

请注意，我通过传递 `http`(HTTP服务器)对象来初始化socket.io的新实例，然后我监听传入socket的`connection`事件，并将其记录到控制台

现在在`index.html`，我添加了一下内容在body：
```html
<script src="/socket.io/socket.io.js"></script>
<script>
const socket=io();//也可以 io("http://xxx")
</script>
```

>思考下：

```js
let a=10//10 100 1000 10000
for(let i =0;i<a;i++){
    var socket= io()
}
```

这就是加载`socket.io-client`所需要的，它暴露了一个io全局，然后连接。

请注意，当我调用`io()`时，我没有指定任何URL，因为它默认尝试连接到为页面提供服务的`HOST`

如果你现在重新加载服务器和网站，你应该看到控制台打印`a user connected`

尝试多打开几个tab标签去访问这个url，你将会看到几条消息：

![](https://socket.io/images/chat-4.png)

每个`socket`还会触发一个特殊的`disconnect`（断开）事件：

```js
io.on('connection',(socket)=>{
    console.log('a user connected')
    socket.on('disconnect',()=>{
        console.log('a user disconnected')
    })
})
```

然后，你如果刷新tab几次，你可以看到如下效果：
![](https://socket.io/images/chat-5.png)


## 笔者总结下：
- `const io = require('socket.io')(app)` 为什么不能这样使用，我也疑问中，还需要调用原生的http 服务，这一点还没搞懂
- we默认链接是/socket.io/xx，显示get，然后才会返回秘钥，随后再建立websocket
- 以上代码，在执行是，一共有两个路由 `/`、 `/socket.io` 
- 每次到服务器的connection 的socket.io id都不一样
- 每个连接的会话到服务器的emit 会话id都一样,
- 但服务器给客户端返回的sid，对于浏览器里面的sid来说的on收到消息的sid都一样
- socket.io 在客户端中，使用的http 去交换秘钥，所以使用原生的websocket是行不通的，尽管可以xhr 去get 拿到 sid，但后续无法针对性的进行解密规则
