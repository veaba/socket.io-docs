const app = require("express")();
const bodyParser = require("body-parser");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
server.listen(80, () => {
  console.log("server listen port = 80");
});

let ssids = [];
io.on("connection", (socket) => {
  console.log("===>");
  ssids.push(socket.id);
  socket.emit("news", { hello: "world" });

  socket.on("my other event", (data) => {
    console.log(data);
  });

  socket.on("news", (data) => {
    console.log(data);
  });

});

const chat = io
.of('/chat')
.on('connection',(socket)=>{
    console.log("chat===>","hello world")
    socket.emit('a message',{
        that:'only',
        '/chat':'will get'
    })
    chat.emit('a message',{
        everyone:'in',
        '/chat':'will get'
    })
})

const chat = io
.of('/news')
.on('connection',(socket)=>{
    console.log("new===>","hello world")
    socket.emit('a message',{
        that:'only',
        '/chat':'will get'
    })
    chat.emit('a message',{
        everyone:'in',
        '/chat':'will get'
    })
})



app.get("/", (req, res) => {
  const query = req.query;
  console.log(query);

  io.sockets.emit("send-a", { target: "通缉A" });

  res.sendFile(__dirname + "/index.html");
});
