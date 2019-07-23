## IO

作为独立生成中的IO命名空间暴露，或调用 `require('socket.io client')`

```html
<script src="/socket.io/socket.io.js"></script>

<script>
    const socket= io('http://localhost');
</script>
```

```js
const io= require('socket.io-client');

//或者使用import 语法

import io from "socket.io-client";

```

## io.protocol

- (Number)

协议版本号