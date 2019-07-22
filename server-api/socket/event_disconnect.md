## Event:'disconnect'

- `reason` (String) 断开连接的原因（客户端或服务器端）

断开时触发

```js
io.on('connection',socket=>{
    socket.on('disconnect',reason=>{
        // ...
    })
})
```

可能的原因：

| 原因|  所在端 | 描述 |
| --- | ----- | --- |
|`transport error` 传输错误|服务端|传输错误|
|`server namespace disconnect`|服务端|服务端执行 `socket.disconnect()`|
|`client namespace disconnect`|客户端|从客户端获取断开数据包|
|`ping timeout`|客户端|客户端在允许的时间内停止响应Ping（根据`pingTimeout`配置设置）|
|`transport close `|客户端|客户端停止发送数据|
||||