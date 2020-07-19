## 初始化示例：多路复用

默认情况下，连接到不同命名空间时使用单个连接（以最小化资源）


```js
const socket= io();
const adminSocket =io('/admin')
//  将建立单一连接
```

使用`forceNew`选项可以禁用该行为：

```js
const socket= io();
const adminSocket= io('/admin',{forceNew:true})
// 将创建两个不同的连接
```

