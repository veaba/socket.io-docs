## 解析器/协议 差异

这只与用其他语言更新socket.io实现、自定义socket.iosocket等相关。

### 差异1 - 数据包编码

解析现在是基于类和异步的。不是返回单个编码字符串，而是使用一个编码数组作为唯一参数对调用回调进行编码。每个编码都应该按顺序写入传输。这更灵活的让二进制数据传输，下面是一个例子：

```js
const encoding= parser.encode(packet);
console.log(encoding); //完全编码的数据包
```

VS:
```js
const encoder= new parser.Encoder();
encoder.encode(packet,encodings=>{
    for(let i=0;i<encodings.length;i++){
        console.log(encodings[i]) //包的编码部分
    }
})
```

### 差异2 - 数据包解码

解码将使事情进一步发展，并且是基于事件的。这是因为某些对象（包含二进制）同时在多个部分中进行编码和解码。这个例子应该有助于理解：

```js
const packet= parser.decode(decoding);
console.log(packet) // 要处理的成型socket.io包

```
VS:


```js
const decoder=  new parser.Decoder();
decoder.on('decoded',(packet)=>{
    console.log(packet) // 要处理的成型socket.io包
})

decoder.add(encodings[0]) // encodings 是从传输接收的两个编码的数组
decoder.add(encodings[1]) // 添加最后一个元素后，解码器将发出“decoded”
```

### 
