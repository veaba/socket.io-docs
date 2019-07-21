## server.path([value])

- `value` (string)
- **Returns** `Server|String`

设置为`Engine.io`和静态文件提供服务的路径`value`。默认为`/socket.io`。如果没有提供参数，此方法将返回当前值。

```js
const io= require('socket.io')();
io.path('/myownpath');

// 客户端
const socket=io({
    path:"/myownpath"
})
```