## 初始化示例：查询选项

```js
const socket=io({
    query:{
        token:"code"
    }
})
```

重新连接时也可以更新查询内容：

```js
socket.on('reconnect_attempt',()=>{
    socket.io.opts.query={
        token:"fgh"
    }
})
```