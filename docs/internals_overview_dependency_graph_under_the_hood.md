## 引擎底层

### Connection连接

```js

const client =io('https://myhost.com')

```

执行以下步骤：

- 在客户端，创建一个`engine.io-client`实例
- `engine.io-client`实例尝试建立`轮询`传输

```txt
GET https://myhost.com/socket.io/?EIO=3&transport=polling&t=ML4jUwU&b64=1

如下:

  "EIO=3"               # Engine.io协议的当前版本
  "transport=polling"   # 正在建立的传输
  "t=ML4jUwU&b64=1"     # 用于缓存总线的哈希时间戳

```

- engine.io服务器响应为：

```json
{
  "type": "open",
  "data": {
    "sid": "36Yib8-rSutGQYLfAAAD",  // 唯一会话ID
    "upgrades": ["websocket"],      // 可能的运输升级列表
    "pingInterval": 25000,          // 心跳机制的第一个参数
    "pingTimeout": 5000             // 心跳机制的第二个参数
  }
}

```

- 内容由`engine.io-parser`编码为：


```txt
'96:0{"sid":"hLOEJXN07AE0GQCNAAAB","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":5000}2:40'

详细:

  "96"  # 第一条消息的长度
  ":"   # 长度和内容之间的分隔符
  "0"   # "打开的"消息类型
  '{"sid":"hLOEJXN07AE0GQCNAAAB","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":5000}' # JSON编码的握手数据
  "2"   # 第二条消息的长度
  ":"   # 长度和内容之间的分隔符
  "4"   # 消息类型
  "0"   # socket.io协议中的"打开的"消息类型

```

- 然后由客户端的`engine.io-parser`对内容进行解码。
- 在`engine.io-client`级别发出`open`事件
- 在`socket.io-client`级别发出`connect`事件


### 升级

一旦刷新了现有传输（XHR轮询）的所有缓冲区，就可以通过发送探测来测试升级。


```txt
GET wss://myhost.com/socket.io/?EIO=3&transport=websocket&sid=36Yib8-rSutGQYLfAAAD

具体:

  "EIO=3"                     # 同样，当前版本的engine.io协议
  "transport=websocket"       # 正在调查的新传输
  "sid=36Yib8-rSutGQYLfAAAD"  # 唯一的会话id

```

- 客户端在websocket帧中发送“ping”包，由`engine.io-parser`编码为`2probe`，其中`2`是“ping”消息类型。
- 服务器响应一个“pong”包，编码为`3probe`，其中`3`是“pong”消息类型。
- 在接收到“pong”包时，升级被认为是完成的，并且所有以下消息都通过新的传输。


