## 日志和调试

socket.io现在完全由TJ Holowaychuk称之为[debug](https://github.com/visionmedia/debug)的一个极简但功能强大的实用程序进行了测
试。

在1.0之前，socket.io服务器默认将所有内容注销到控制台。这对许多用户来说是非常冗长的（尽管对其他用户非常有用），所以现在默认情况下我们完全保持沉默。

基本思想是socket.io使用的每个模块提供不同的调试范围，使您能够深入了解内部。默认情况下，所有输出都被抑制，您可以通过提供`DEBUG `env变量（node.js）或`localstorage.debug`属性（browsers）来选择查看消息。

您可以在我们的主页上看到它的实际应用：

### 可用的调试范围

查看可用信息的最佳方法是使用*：

```js

DEBUG=* node yourfile.js

```

或者在浏览器中：

```js

localStorage.debug = '*';

```

然后根据你感兴趣的范围进行过滤。您可以在`*`前面加上范围前缀，如果有多个范围，则用逗号分隔。例如，要仅查看node.js上socket.io socket的调试语句，请尝试以下操作：

```js

DEBUG=socket.io:client* node yourfile.js

```

要查看来自engine和socket.io的所有调试消息：


```js

DEBUG=engine,socket.io* node yourfile.js

```
