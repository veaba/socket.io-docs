## new Manager(url[,options])

- `url` (String)
- `options` (Object)
- **Returns** `Manager`

可用的选项：

| 选项 | 默认值 | 描述 |
|------|-------|------|
|`path`|`/socket.io`|               在服务器端捕获的路径的名称  |
|`reconection`|`true`|              是否自动重新连接           |
|`reconnectionAttempts`|`Infinity`| 放弃前重新连接尝试的次数    |
|`reconnectionDelay`|`1000`|        在尝试重新连接之前，最初等待多长时间（`1000`）。受+/- `randomizationFactor`的影响，例如，默认初始延迟将在500到1500毫秒之间。|
|`reconnectionDelayMax`|`5000`|     重新连接之间等待的最长时间（`5000`）。每次尝试都会增加2倍的重新连接延迟，并随机分组，如上所述。|
|`randomizationFactor`|`0.5`|       0 <= `randomizationFactor` <= 1|
|`timeout`|`20000`|                 在发出`connect_error`和`connect_timeout`事件之前的连接超时|
|`authConnect`|`true`|              如果设置为`false`，则必须在确定合适时调用`manager.open`|
|`query`|`{}`|                      连接命名空间时发送的其他查询参数（然后在服务器端的`socket.handshake.query`对象中找到）|
|`parser`|-|                        要使用的解析器。默认为socket.io附带的解析器实例。请参见socket.io-parser。|
||||

基础engine.io客户端的可用选项：

| 选项 | 默认值 | 描述 |
|------|-------|------|
|`upgrade`|`true`|客户端是否应该尝试将传输从长轮询升级到更好的传输。|
|`forceJSONP`|`false`|强制JSONP进行轮询传输。|
|`jsonp`|`true`|确定在需要轮询时是否使用JSONP。如果禁用（通过设置为false），如果没有其他传输可用，将发出错误（说“没有可用的传输”）。如果另一个传输可用于打开连接（例如WebSocket），则将使用该传输。|
|`froceBase64`|`false`|强制对轮询传输进行base 64编码，即使xhr2 responseType可用且websocket支持二进制。|
|`enablesXDR`|`false`|启用IE8的xdomainRequest以避免加载条闪烁并发出咔嗒声。默认为`false`，因为xdomainRequest存在不发送cookie的缺陷。|
|`timestampRequests`|-|是否在每个传输请求中添加时间戳。注意：除非此选项显式设置为`false`，否则轮询请求总是被标记。|
|`timestampParam`|`t`|timestamp参数|
|`policyPort`|`843`|服务器侦听的端口策略|
|`transports`|`['polling','websocket']`|要尝试的传输列表（按顺序）。`Enigine`总是尝试直接与第一个连接，前提是它通过了特性检测测试。|
|`transportOptions`|`{}`|按传输名称索引的选项哈希，覆盖给定传输的公用选项|
|`rememberUpgrade`|`false`|如果为true，并且先前与服务器的WebSocket连接成功，则连接尝试将绕过正常的升级过程，并最初尝试WebSocket。传输错误之后的连接尝试将使用正常升级过程。建议仅在使用SSL/TLS连接或知道网络不会阻止WebSockets时启用此选项。|
|`onlyBinaryUpgrades`|`falsee`|传输升级是否应限于支持二进制数据的传输|
|`requestTimeout`|`0`|XHR轮询请求超时（毫秒）（`0`）（仅限轮询传输）|
|`protocols`|-|子协议列表（参见[MDN参考](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#Subprotocols)）（仅适用于WebSocket传输）|
||||

底层engine.io客户端的node.js-only选项：

| 选项 | 默认值 | 描述 |
|------|-------|------|
|`agent`|`false`|要使用的`http.agent`|
|`pfx`|-|用于SSL的证书、私钥和CA证书。|
|`key`|-|用于SSL的私钥。|
|`passphrase`|-|私钥或pfx的密码短语字符串。|
|`cert`|-|要使用的公用X509证书。|
|`ca`|-|用于检查远程主机的颁发机构证书或颁发机构证书数组。|
|`ciphers`|-|描述要使用或排除的密码的字符串。有关格式的详细信息，请参阅[密码格式列表](http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT)。|
|`rejectUnauthorized`|`false`|如果为true，则根据提供的CA列表验证服务器证书。如果验证失败，将发出“错误”事件。在发送HTTP请求之前，在连接级别进行验证。|
|`perMessageDeflate`|`true`|websocket permessage deflate扩展的参数（请参阅[ws module](https://github.com/einaros/ws) API文档）。设置为`false`以禁用。|
|`extraHeaders`|`{}`|将为每个请求传递给服务器的头（通过XHR轮询和WebSockets）。这些值可以在握手过程中使用，也可以用于特殊代理。|
|`forceNode`|`false`|对websockets使用nodejs实现-即使有可用的本地浏览器websocket，默认情况下这比nodejs实现更可取。（这在使用混合平台（如nw.js或electron）时很有用）|
|`localAddress`|-|要连接到的本地IP地址|
||||