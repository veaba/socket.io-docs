## 身份验证差异

### Socket.io 现使用中间器件

可以通过io.use（）为socket.io服务器提供任意函数，该函数在创建socket时运行。查看此示例：

```js
const srv=require('http').createServer();
const io = require('socket.io')(srv)
let run=0;

io.use((socket,next)=>{
    run++; //0->1
    next()
});

io.use((socket,next)=>{
    run++;// 1->2
    next();
})

const socket=require('socket.io-client')();
socket.io('connect',()=>{
    // run  此时等于2
})

```

### 现通过中间件进行身份验证更简单

旧的`io.set()`和`io.get()`已弃用，只能支持向后兼容。下面是一个将旧的授权示例转换为中间件样式的转换：

```js
io.set('authorization',(handshakeData,callback)=>{
    //确保握手数据看起来不错
    callback(null,true)//出错，'authorized' boolean second
})
```
新的：

```js
io.use((socket,next)=>{
    const handshakeData= socket.request;
    // 确保握手数据看起来和以前一样好
    // 如果错误，则执行这个：
    // next(new Error('not authorized'));
    // 否则回调next
    next();
})
```

### 命名空间授权?

```js
io.of('/namespace').use((socket,next)=>{
    const handshakeData= socket.request;
    next()
})
```
