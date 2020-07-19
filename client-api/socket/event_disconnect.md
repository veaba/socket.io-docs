## Event: 'disconnect'

- `reason` (String) "io server disconnect(IO服务器断开)","io client disconnect’ (IO客户端断开)","ping timeout (ping 超时)"

断开时触发

```js
socket.on('disconnect',(reason)=>{
    if(reason==='io server disconnect'){
        // 断开连接是由服务器启动的，需要手动重新连接
        socket.connect()
    }
    // 否则，socket将自动尝试重新连接
})
```