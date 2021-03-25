const app = require('express')()
const bodyParser= require('body-parser')
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
server.listen(80,()=>{
    console.log('server listen port = 80')
})



let ssids=[]
io.on('connection',socket=>{

    ssids.push(socket.id)
    socket.emit('news',{hello:"world"})

    socket.on('my other event',(data)=>{
        console.log(data)
    })

    setInterval(()=>{
        socket.emit('all',{
            name:'服务端时间',
            time:new Date(),
            ssids:ssids
        })
    },2000)

    // 循环广播
    setInterval(()=>{
        for(let item of ssids){
            // todo 广播如果失败呢
           socket.broadcast.to(item).emit('hi',{target:item,title:'广播'})
        }
    },10000)
})

app.get('/',(req,res)=>{
    const query = req.query;
    console.log(query)

    io.sockets.emit('send-a',{target:'通缉A'})

    res.sendFile(__dirname+'/index.html')
})