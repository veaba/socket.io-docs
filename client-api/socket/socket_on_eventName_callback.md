## socket.on(eventName,callback)

- `eventName` (String)
- `callback` (Function)
- **Returns** `Socket`

为给定事件注册新的处理程序。

```js
socket.on('news',(data)=>{
    console.log(data)
})

// 多个参数

socket.on('new',(arg1,arg2,arg3,arg4)=>{
    // ...
})

// 使用回调

socket.on('news',(cb)=>{
    cb(0)
})
```
socket实际上继承了[Emitter](https://github.com/component/emitter)类的每个方法，比如`hasListeners`，`once`或`off`（删除一个事件监听器