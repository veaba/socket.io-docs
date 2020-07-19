## 初始化示例：自定义路径

```js
const socket= io('http://localhost',{
    path:"/myownpath"
})

// 服务端
const io =require('socket.io')({
    path:"/myownpath"
})
```

请求的URLS会像:`localhost/myownpath/?EIO=3&transport=polling&sid=<id>`

```js
const socket= io('http://localhost/admin',{
    path:"/mypath"
})
```

在这里，socket通过自定义路径`mypath`连接到`admin`命名空间。

请求的URLS会像:`localhost/mypath/?EIO=3&transport=polling&sid=<id>` (命名空间作为有效负载的一部分发送)