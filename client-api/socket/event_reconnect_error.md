## Event: 'reconnec_error'

- `error` (Object) 错误对象

在重新连接尝试错误时触发。

```js
socket.on('reconnect_error',(error)=>{
    // ...
})
```