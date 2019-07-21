## server.sockets

- (Namespace)命名空间

namespace的默认别名(`/`)

```js
io.sockets.emit('hi',"everyone");

// 等价于

io.of('/').emit('hi',"everyone")
```


