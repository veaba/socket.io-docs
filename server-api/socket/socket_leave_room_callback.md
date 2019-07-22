## socket.level(room[,callback])

- `room` (String)
- `callback` (Function)
- **Returns** 连接的socket

从房间中移除socket，并选择性地触发带有错误签名（如果有）的回调。

**断开后房间自动保留。**