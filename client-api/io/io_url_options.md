## io([url][,options])

- `url` (String) (默认为 `window.location`)
- `options` (Object)
    - `forceNew` (Boolean) 是否重用现有连接
- **Returns** `Socket`

为给定的URL创建新的`管理器`,并尝试在后续调用中重用现有的`管理器`，除非用`false`传递`多路复用`选项。传递此选项等同于传递`force new connection：true`或`forcenew:true`。

为URL中路径名指定的命名空间返回新的`Socket`实例，默认为`/`。例如，如果`url`为`http://localhost/users`，则将建立到`http://localhost` 的传输连接，并将建立到`/users`的socket.io连接。

也可以通过查询选项或直接在URL中提供查询参数（例如：http://localhost/users?token=abc）。

有关可用选项的列表,见[new Manager(url[, options])](https://socket.io/docs/client-api/#new-Manager-url-options) 