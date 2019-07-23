## Server

暴露 `require('socket.io')`

### new Server(httpServer[,options])

- `httpServer` (http.server) 要绑定到服务器
- `options` (Object)

新旧比较：

```js
const io = require('socket.io')()

// 或者
const Server=require('socket.io');
const io= new Server()

```

可用选项：

| 选项 | 默认值 | 描述 |
|------|------- |------|
|`path`|`/socket.io`|要捕获的路径名称|
|`serverClinet`|`true`|是否提供客户端文件|
|`adapter`|-|要使用的适配器。默认为socket.io随附的基于内存的`Adapter`实例。见[socket.io-adapter](https://github.com/socketio/socket.io-adapter)|
|`origins`|`*`|允许源|
|`parser`|-|要使用的解析器。默认为socket.io附带的解析器实例,见[ socket.io-parser](https://github.com/socketio/socket.io-parser)|
||||

基础engine.io服务器的可用选项：

| 选项 | 默认值 | 描述 |
|------|------- |------|
|`pingTimeout`|`5000`|多少毫秒没有pong包则认为连接已关闭|
|`pingInterval`|`25000`|发送新的ping数据包前需要多少毫秒|
|`upgradeTimeout`|`10000`|取消未完成的传输升级之前需要多少毫秒|
|`maxHttpBufferSize`|`10e7`|在关闭会话之前（为了避免DOS），一条消息可以有多少字节或字符。|
|`allowRequest`||一个函数，接收给定的握手或升级请求作为其第一个参数，并决定是否继续。第二个参数是一个需要用决定的信息调用的函数：`fn(err，success)`，其中`success`是一个布尔值，false表示请求被拒绝，err是一个错误代码。|
|`transports`|`['polling','websocket']`|传输以允许连接到|
|`allowUpgraders`|`true`|是否允许传输升级|
|`preMessageDeflate`|`true`|websocket permessage deflate扩展的参数（请参阅[ws 模块](https://github.com/einaros/ws) API文档）。设置`false`为禁用|
|`httpCompress`|`true`|轮询传输的HTTP压缩参数（请参阅[zlib](http://nodejs.org/api/zlib.html#zlib_options) API文档）,设置`false`为禁用。|
|`cookie`|`io`|包含要作为握手响应头一部分发送的客户端SID的HTTP cookie的名称。设置为`false`不发送。|
|`cookiePath`|`/`|上述`cookie`选项的路径。如果为false，则不会发送路径，这意味着浏览器将只在engine.io附加路径（`/engine.io`）上发送cookie。设置为“假”不在所有请求上保存IO cookie。|
|`cookieHttpOnly`|`true`|如果客户端API（如javascript）无法访问`true` httponly IO cookie。如果`cookie`或`cookiepath`,设置为false，则此选项无效。|
|`wsEngine`|`ws`|要使用的WebSocket服务器实现。指定的模块必须符合WS接口（请参阅[ws模块](https://github.com/websockets/ws/blob/master/doc/ws.md)API文档）。默认值为`ws`。另外一个可选的C++插件也可以安装`uws`模块。|
||||

在这些选项中：

- `pingTimeout`和`pingInterval`参数将影响socket知道服务器不再可用之前的延迟。例如，如果底层TCP连接由于网络问题而未正确关闭，则客户端可能需要等待`pingTimeout+pingInterval` 毫秒，然后才能获得`disconect`(断开连接)事件。

- `transports`数组的顺序很重要。默认情况下，首先建立一个长轮询连接，然后在可能的情况下升级到WebSocket。使用`['websocket']`意味着如果无法打开websocket连接，就不会有回退。

```js
const server= require('http').createServerr()

const io = require('socket.io')(server,{
    path:'/test',
    serverClient:false,
    // 以下是Engine.io选项
    pingInterval:10000,
    pingTimeout:5000,
    cookie:false
})
```