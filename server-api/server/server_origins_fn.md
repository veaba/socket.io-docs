## server.origins(fn)

- `fn` (Function)
- **Returns** `Server`

提供一个接受两个参数的函数`origin：String`和`callback(error，success)`，其中`success`是一个布尔值，指示是否允许来源。如果`success`设置为`false`，则必须将错误作为字符串值提供，该字符串值将附加到服务器响应中，例如“Origin not allowed”。

### 潜在缺点：

- 在某些情况下，当无法确定`origin`时，其值可能为`*`
- 由于此功能将针对每个请求执行，因此建议尽快使此功能工作。（耗时不要太长）
- 如果`socket.io`与`express`一起使用，CORS headers将仅对`socket.io`请求受影响。对于Express，可以使用[CORS](https://github.com/expressjs/cors)。

```js
io.origins((origin,callback)=>{
    if(origin!=='https://foo.example.com'){
        return callback('origin not allowed',false)
    }
    callback(null,true)
})
```