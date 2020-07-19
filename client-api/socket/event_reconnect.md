## Event: 'reconnect'

- `attempt` (Number) 重新连接尝试次数

在成功重新连接时触发。

```js
socket.on('reconnect',(attemptNumber)=>{
    // ...
})
```