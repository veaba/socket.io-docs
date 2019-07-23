## 初始化示例：使带有自签名证书



```js
// 服务端
const fs= require('fs');
const server= require('https').createServer({
    key:fs.readFileSync('server-key.pem'),
    cert:fs.readFileSync('server-cert.pem')
})

const io = require('socket.io')(server);
server.listen(3000);


// 客户端

const socket=io({
    // 选项 1
    ca:fs.readFileSync('server-cert.pem'),
    // 选项2 警告!!：它让你很容易受到MITM(中间人)攻击
    rejectUnauthorized:false
})
```