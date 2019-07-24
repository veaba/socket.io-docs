- `goal 目标，得分，母的`
- `populate 填充、补完`

## web框架

第一个目标是设置一个简单的HTML网页，用于提供表单和消息列表，我们将使用Node.js web框架`express`。确保已安装了[nodejs](http://nodejs.org)


首先，让我们创建一个描述项目`package.json`清单文件，这里建议放在一个专用的空目录中（本范例中的名称是 `chat-example`）

```json
{
    "name":"socket-chat-example",
    "version":"0.0.1",
    "description":"my first socket.io app",
    "dependencies":{}
}
```
现在，为了使用我们需要的东西，开始补充`依赖项`，我们使用 `npm install --save express`。(大天朝 自己安装`cnpm install --save express`)

```shell
    npm install --save express@4.15.2 #这里不建议指定版本

    #npm install --save express 
```

`express`安装后，我们可以创建一个设置我们的应用程序的 `index.js` 文件


```js
//en 版本提供的例子
const app = require('express')()
const http=require('http').Server(app)

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})
http.listen(3000,()=>{
    console.log('listening on *:3000')
})

//个人简写如下:

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>')
})
app.listen(3000,()=>{
    console.log('listening on *:3000')
})

```


上面的意思是说：
- `express` 初始化 `app` 提供给HTTP服务器的函数处理程序（如第2行所示）
- 我们顶一个一个路由处理程序 `/`，当访问这个网站主页时会被调用
- 我们让HTTP服务器监听端口 `3000`

如果你运行 `node index.js` 你可以看到如下：

![](https://socket.io/images/chat-1.png)

然后在你的浏览器上打开 `http://localhost:3000`：

![](https://socket.io/images/chat-2.png)


