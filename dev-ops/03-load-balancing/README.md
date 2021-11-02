# DevOps 03 | Load Balancing

```
brew install nginx
```

## Serving multiple node apps via same URL

Put the following into `/usr/local/etc/nginx/servers/todo-app.conf`

```
# the IP(s) on which your node server is running. I chose port 3000.
upstream todo_fe {
    server 127.0.0.1:3000;
    keepalive 8;
}

upstream todo_api {
    server 127.0.0.1:5000;
    keepalive 8;
}

upstream todo_other_fe {
    server 127.0.0.1:7000;
    keepalive 8;
}

# the nginx server instance
server {
    listen 1234;
    listen [::]:1234;
    # server_name yourdomain.com www.yourdomain.com;
    # access_log /var/log/nginx/yourdomain.com.log;

    # pass the request to the node.js server with the correct headers
    # and much more can be added, see nginx config options
    location /api/ {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://todo_api/;
      proxy_redirect off;
    }

    location /other_fe/ {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://todo_other_fe/;
      proxy_redirect off;
    }

    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://todo_fe/;
      proxy_redirect off;
    }
 }
```

Run the servers via 

```
cd dev-ops/01-docker-kubernetes/todo-api; yarn start
cd dev-ops/01-docker-kubernetes/todo-app; yarn start
```

Load the nginx config via

```
brew services start nginx
```

You can now talk to the FE via http://localhost:1234/tasks and to the BE via http://localhost:1234/api/tasks or the other FE: http://localhost:1234/other_fe.

## Make use of the LB

In the FE, we are currently calling localhost:5000 --> Change it to use actually use the load balancer.