## socket.handshake

- (Object)

握手细节：

```json
{
    "headers": "",//作为握手的一部分发送的头
    "time":"",//创建日期（字符串）
    "address":"",//客户端的IP
    "xdomian":"",//连接是否跨域
    "secure":"",//连接是否安全
    "issued":"",//创建日期（作为Unix时间戳）
    "url":"",//请求URL字符串
    "query":""//查询的对象
}
```

使用：

```js

io.use((socket,next)=>{
    let handshake= socket.handshake;
})

io.on('connection',(socket)=>{
    let handshake= socket.handshake;
})

```