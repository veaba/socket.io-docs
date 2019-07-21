## server.engine.generateld

覆盖默认方法以生成自定义 socket.id

使用节点请求对象（`http.Incomingmessage`）作为第一个参数调用函数。

```js
io.engine.generateId=(req)=>{
    return "custom:id:"+custom_id++;//自定义的id必须是唯一的
}
```