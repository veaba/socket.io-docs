## 使用Node.js集群

与nginx一样，node.js也通过`cluster`模块提供了内置的集群支持。

Fedor Indutny创建了一个名为[Sticky Session](https://github.com/indutny/sticky-session)的模块，该模块确保文件描述符（即：连接）基于`remoteAddress`（即：IP）进行路由。请注意，这可能会导致路由不平衡，这取决于散列方法。

您还可以根据集群工作进程ID为集群中的每个工作进程分配不同的端口，并使用上面可以找到的配置来平衡负载。