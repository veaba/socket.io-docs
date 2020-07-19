## 初始化示例：使用自定义解析器

默认的[解析器](https://github.com/socketio/socket.io-parser)以牺牲性能为代价来提升兼容性（对`blob`、`文件`、二进制检查的支持）。可以提供一个定制的解析器来满足应用程序的需求。请看[这里](https://github.com/socketio/socket.io/tree/master/examples/custom-parsers)的例子。

```js
const parser = require('socket.io-msgpack-parser');//or require('socket.io-json-parser')
const socket=io({
    parser
})

// 服务器端必须具有相同的解析器，才能进行通信
const io= require('socekt.io')({
    parser
})
```