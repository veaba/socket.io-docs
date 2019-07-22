## socket.on(eventName,callback)

(继承 `EventEmitter`)

- `eventName`(String)
- `callback` (Function)
- **Returns** `Socket`

为给定事件注册新的处理程序。

```js

socket.on('news',data=>{
    console.log(data);
})

// 有几个 arguments
socket.on('news',(arg1,arg2,arg3)=>{
    // ...
})

// 或者
socket.on('news',(data,callback)=>{
    callback(0)
})
```