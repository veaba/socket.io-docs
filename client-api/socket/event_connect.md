## Event:'connect'

在包括成功重新连接的连接上触发。

```js
socket.on('connect',()=>{
    //...
})

// 注意：您应该在connect之外注册事件处理程序，
// 因此重新连接时不会再次注册它们
socket.on('myevent',()=>{
    // ....
})
```