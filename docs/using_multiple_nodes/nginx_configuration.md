## Nginx 配置

在`nginx.conf`文件的`http {}`部分中，您可以使用要在以下两者之间平衡负载的socket.io进程列表声明`upstream`部分：

```nginx
http{
    server{
        listen 3000;
        server_name io.yourhost.com;

        location / {
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            proxy_pass http://nodes;

            # 启用websockets
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";

            
            }
        }
        upstream nodes {
            # 基于IP启用粘性会话
            ip_hash;
            server app01:3000;
            server app02:3000;
            server app03:3000;

        }
    }

```

请注意`ip_hash`指令，它指示连接将是粘性的。

确保在最顶层配置`worker_process`，以指示nginx应该使用多少worker。您还可能希望调整`events {}`块中的`worker_connections`设置。

[例子](https://github.com/socketio/socket.io/tree/master/examples/cluster-nginx)

