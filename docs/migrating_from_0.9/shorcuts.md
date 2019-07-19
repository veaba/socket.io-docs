## 快捷方式

一般来说，常见事物有一些新的捷径。旧版本应该仍然有效，但是快捷方式很好。

### 向默认命名空间中的所有客户端广播

以前:

```js
io.sockets.emit('eventname',"eventdata");
```
现在：

```js
io.emit('eventname','eventdata')
```

整洁。

请注意，在这两种情况下，这些消息都会到达连接到默认“/”命名空间的所有客户端，但不会到达其他命名空间中的客户端。

### 启动服务端

以前：

```js
const io = require('socket.io');
const socket=io.listen(80,{/*选项*/});

```

现在：

```js
const io=require('socket.io');
const socket=io({/*选项*/})
````
