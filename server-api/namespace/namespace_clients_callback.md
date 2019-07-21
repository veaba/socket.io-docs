## namespace.clients(callback)

- `callback` (Function)

取连接到此命名空间的客户端ID列表（如果适用，跨所有节点）。

```js
const io =require('socket.io')();
io.of('/chat'),clients((error,clients)=>{
    if (error) throw error;
    console.log(clients) // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
})
```

获取命名空间房间中所有客户端的示例：

```js
io.of('/chat').in('general').clients((error,clients)=>{
    if(error) throw error;
    console.log(clients)// [Anw2LatarvGVVXEIAAAD]
})
```

与广播一样，默认值是来自默认命名空间 `/` 的所有客户端：

```js
io.clients((error,clients)=>{
    if(error) throw error;
    console.log(clients); // [6em3d4TJP8Et9EMNAAAA, G5p55dHhGgUnLUctAAAB]
})
```
