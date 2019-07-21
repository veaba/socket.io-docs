## Flag:'binary'

(二进制传输可以提高性能)

指定发出的数据中是否存在二进制数据。指定时提高性能。可以是 `true` 或者 `false`

```js
io.binary(false).emit('an event',{some:'data'});
```