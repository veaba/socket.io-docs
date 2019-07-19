## 日志差异

### 现在支持基于调试的日志记录

要打印所有调试日志，请将环境变量DEBUG设置为。ie：`DEBUG=node index.js`

只打印socket.io相关日志：`DEBUG=socket.io:*node index.js`。

只从socket对象打印日志：`DEBUG=socket.io:socket node index.js`

希望这种模式在这一点上是有意义的。socket.io/lib中的文件名与其调试名等效。

调试也在浏览器中工作；日志被保存到本地存储。

使用：打开开发控制台，键入`localstorage.debug='socket.io:*'`（或任何调试级别），然后刷新页面。在运行`localstorage.debug=''`之前，所有内容都会被记录。

请参阅此处的调试文档了解[更多信息](https://www.npmjs.org/package/debug)

