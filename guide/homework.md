>针对单个用户，主动发消息，怎么做到的？


范例如下：
```js
const app = express();

const io = socket(app.listen(444, () => {
    console.info('socket io start:444');
}));
io.on('connection', _websocket);

// 对数组第一个ids广播消息
let chatIds=[]
const chat = io.of('/chat').on('connection',(socket)=>{
    chatIds.push(socket.id)
    
    let id = chatIds[chatIds.length-1]
    setInterval(()=>{
        console.log(1,id)
        socket.broadcast.to(chatIds[0]).emit('hello', 'axxxx');
  },5000);
});
})


```
## 作业

以下是改进应用程序的想法：
- 当有人连接或者断开连接时，向连接的用户广播消息
- 添加对昵称的支持
- 不要给用户发送相同的消息，而在它按下回车后直接附加消息
- 添加“{用户}”正在输入的功能
- 显示谁在线
- 添加私人消息
- 分享你的改进
