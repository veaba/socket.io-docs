## 依赖关系图

socket.io codebase跨多个存储库拆分：

- https://github.com/socketio/socket.io
- https://github.com/socketio/socket.io-client
- https://github.com/socketio/socket.io-parser
- https://github.com/socketio/socket.io-adapter
- https://github.com/socketio/socket.io-redis
- https://github.com/socketio/engine.io
- https://github.com/socketio/engine.io-client
- https://github.com/socketio/engine.io-parser

下图显示了每个项目之间的关系：

![依赖图](/images/dependencies.jpg)

每个项目都有自己的一套功能：

### engine.io-parser

是用于engine.io协议编码的javascript解析器，由 [engine.io-client](https://github.com/socketio/engine.io-client) 和 [engine.io](https://github.com/socketio/engine.io) 共享。

协议的规范可以在这里找到：https://github.com/socketio/engine.io-protocol

### engine.io

engine.io是socket.io基于传输的跨浏览器/跨设备双向通信层的实现。

它的主要特点是能够在飞行中交换传输。连接（由 [engine.io-client](https://github.com/socketio/engine.io-client) 对应方启动）从xhr轮询开始，但如果可能，可以切换到websocket。

它使用 [engine.io-parser](https://github.com/socketio/engine.io-parser) 对数据包进行编码/解码。

### engine.io-client

这是[engine.io](https://github.com/socketio/engine.io)的客户机，是基于传输的[socket.io](https://github.com/socketio/socket.io)跨浏览器/跨设备双向通信层的实现。

它在浏览器（包括HTML5 [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) ）和node.js中运行。

它使用 [engine.io-parser](https://github.com/socketio/engine.io-parser) 对数据包进行编码/解码。


### socket.io-adapter

这是默认的socket.io内存适配器类。

此模块不适用于最终用户，但可以用作从您可能想要构建的其他适配器（如[socket.io-redis](https://github.com/socketio/socket.io-redis)）继承的接口。

### socket.io-redis

这是使用redis 发布/订阅 机制在多个节点之间广播消息的适配器。

### socket.io-parser
用符合[socket.io-protocol](https://socket.io/docs/internals/) 第3版的javascript编写的socket.io编码器和解码器。由[socket.io](https://github.com/socketio/socket.io)和[socket.io-client](https://github.com/socketio/socket.io-client)使用。


### socket.io

socket.io给engine.io“raw”api带来了一些语法上的优势。它还引入了两个新的概念，即`root`和`namespace`，这引入了通信通道之间的关注分离。请参阅[相关文档](https://socket.io/docs/rooms-and-namespaces/)。

默认情况下，它在`/socket.io/socket.io.js`处公开客户端的浏览器构建。

### socket.io-client

这是[socket.io](https://github.com/socketio/socket.io)的客户端。它依赖于[engine.io-client](https://github.com/socketio/engine.io-client)，它管理传输交换和断开检测。

它会自动处理重新连接，以防基础连接被切断。

它使用[socket.io-parser](https://github.com/socketio/socket.io-parser)对数据包进行编码/解码。


