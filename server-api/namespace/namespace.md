## 命名空间 

表示在由路径名标识的给定作用域下连接的socket池（例如：`/chat`）。

客户端总是连接到`/`（主命名空间），然后可能连接到其他命名空间（同时使用相同的基础连接）。

关于如何以及为什么，请看一下：[房间(room)和名称空间(Namespace)](https://socket.io/docs/rooms-and-namespaces/)。

