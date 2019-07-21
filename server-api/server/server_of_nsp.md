## server.of(nsp)

- `nsp` (String|RegExp|Function)
- **Returns** `Namespace`

通过路径名标识符`nsp`初始化并检索给定的`namespcae`。如果命名空间已经初始化，它会立即返回它。

```js
const adminNamespace= io.of("/admin");
```

还可以提供regex或函数，以便以动态方式创建命名空间：

```js
const dynamicNsp =io.of(/^\/dynamic-\d+$/).on('connect',(socket)=>{
    const newNamepsace= socket.nsp;// newNamespace.name==='/dynamic-101'

    // 给所有订阅这个命名空间的客户端广播
    newNamespace.emit('hello')

})

// 客户端

const socket=io('/dynmice-101');

// 广播到每个订阅的命名空间中的所有客户端
dynamicNsp.emit('hello');

// 为每个订阅的命名空间使用中间件

dynamicNsp.use((socket,next)=>{
    //(>^ω^<)
})


```

具体函数：

```js
io.of((name,query,next)=>{
    next(null,checkToken(query.token));
}).on('connect',socket=>{
    //your code
}
```