## 初始化示例：额外Headers

这仅在启用了`轮询`传输（默认情况下）时才有效。将`WebSocket`用作传输时，不会附加自定义头。这是因为WebSocket握手不支持自定义头文件。（见[WebSocket协议RFC](https://tools.ietf.org/html/rfc6455#section-4)）


客户端：
```js
const socket=io({
    transportOptions:{
        polling:{
            extraHeaders:{
                "x-clientId":"abc"
            }
        }
    }
})
```

服务端
```js
const io= require('socket.io')()

// 中间器件

io.use((socket,next)=>{
    const clientId= socket.handshake.headers['x-clientId'];
    if (isValid(clientId)){
        return next()
    }
    return next(new Error("authentication error"))
})
```
