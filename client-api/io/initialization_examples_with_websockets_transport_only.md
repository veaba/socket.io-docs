## 初始化示例：仅限WebSocket传输

默认情况下，首先建立一个长轮询连接，然后升级到“更好”的传输（如WebSocket）。如果你喜欢危险的操作，这部分可以跳过：

```js
const socket=io({
    transports:["websocket"]
})

// 重新连接时，将传输选项重置为websocket
// 连接可能失败（由代理、防火墙、浏览器等引起）
socket.on('reconnect_attempt',()=>{
    socket.io.opts.transports=['polling','websocket']
})

```