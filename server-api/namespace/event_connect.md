## Event:'connect'

- `socket` (Socket) 与 客户端的socket 连接

在来自客户端的连接上触发。

```js
io.on('connect',socket=>{
    // ...
})

io.of('/admin').on('connect',socket=>{
    // ... 
})
```