## 安装

### Server(服务端)

```shell
npm install --save socket.io 
```

[源码](https://github.com/socketio/socket.io)

### Javascript(客户端)

服务器默认情况下会在`/socket.io/socket.io.js`中暴露客户端的独立版本，（其实client集成在socket.io里面的一个客户端版本）

也可以在 CDN 中引入，[请戳](https://cdnjs.com/libraries/socket.io)

在`Node.js`中，或者在打包工具比如 `webpack` 或者 `browserify`，你也可以从`npm`中安装依赖包：

```shell
npm install --save socket.io-client
```

[源码](https://github.com/socketio/socket.io-client)

### 其他实现方式

这几个在其他语言实现的客户端，都是社区维护：

- Java: https://github.com/socketio/socket.io-client-java
- C++: https://github.com/socketio/socket.io-client-cpp
- Swift: https://github.com/socketio/socket.io-client-swift
- Dart: https://github.com/rikulo/socket.io-client-dart
- Python: https://github.com/miguelgrinberg/python-socketio
- .Net: https://github.com/Quobject/SocketIoClientDotNet


