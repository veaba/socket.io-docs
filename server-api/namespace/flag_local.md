## Flag:'local'

后续事件发出设置一个修饰符，该修饰符表示事件数据将仅广播到当前节点（使用redis适配器时）。


```js
io.local.emit('an event',{some:'data'});
```