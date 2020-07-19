## manager.open([callback])

- `callback` (Function)
- **Returns** `Manager`

如果管理器是以`autoconnect`设置为`false`的方式启动的，则启动新的连接尝试。

`callback`参数是可选的，一旦尝试失败/成功，将调用该参数。