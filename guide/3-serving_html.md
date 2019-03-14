
## 困难的词汇
- `confufing 混乱 混淆`
- `entire 整个`
- `placed 放置`
- `instead 相反的`
- `refactor 重构`

# 3. 服务HTML

到目前为止，在 `index.js` 中我们调用了 `res.end`并传递一个HTML字符串。如果我们将整个应用程序的HTML放在那里，我们代码看起来会很混乱，相反，我们将创建一个`index.html`文件并提供服务。

让我们重构下，使用`sendFile`替换下路由处理程序：

```js
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
```

在`index.html`补充下内容，如下：

```html
<!doctype html>
<html>
 <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
</html>
```

如果你重启下(ctrl+c 关闭node服务，然后再次运行`node index.js`)进程和刷新页面，你应该看到如下：

![](https://socket.io/images/chat-3.png)




