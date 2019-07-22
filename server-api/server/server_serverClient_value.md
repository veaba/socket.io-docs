## server.serverClient([value])

- `value` (boolean)
- **Returns** `Server | Boolean`

如果`value`为`true`，则所连接的服务器（请参阅 `server #attach`）将为socket文件提供服务。默认为`true`。调用`attach`后，此方法无效。如果没有提供参数，此方法将返回当前值。

```js
// 传递服务器和“serveclient”选项

const io= require('socket.io')(http,{serverClient,false})

// 或者不传递服务器，然后可以调用该方法

const io= require('socket.io')()
io.serverClient(false)
io.attach(http)

```