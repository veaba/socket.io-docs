## Event: 'reconnect_attempt'

- `attempt` (Number) 重新连接尝试次数

试图重新连接时触发。

```js
socket.io('reconnect_attempt',(attemptNumber)=>{
    // ...
})

```