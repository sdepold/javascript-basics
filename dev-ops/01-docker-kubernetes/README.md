# DevOps 01 | Docker / Kubernetes

This lesson focusses on Docker and Kubernetes.

## Docker

TBD: What is it?

### Steps

#### Create a `Dockerfile` for your To Do app's frontend and backend.

```dockerfile
FROM node:10
EXPOSE 8080
WORKDIR /srv/<project>
ADD . /srv/<project>
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start"]
```

#### Create a Docker image

```bash
docker build -t <registry>/<username>/<project>:1.0.0 .
# e.g. docker build -t <registry>/sdepold/todo-fe:1.0.0 .
```

#### Try the build locally

```bash
docker run -p 8080:8080 <registry>/<username>/<project>:1.0.0
# e.g. docker run -p 8080:8080 <registry>/sdepold/todo-fe:1.0.0
```

You should be able to open your application on http://localhost:8080 now.

#### Push the Docker image to the hub

```bash
docker login <registry>
docker push <registry>/<username>/<project>:1.0.0
# e.g. docker push <registry>/sdepold/todo-fe:1.0.0
```

## Kubernetes

TBD: What is it?

Cheatsheet: https://kubernetes.io/docs/reference/kubectl/cheatsheet/#viewing-finding-resources
Info on DNS: https://tess.io/userdocs/network/kubedns/

### Steps

#### Create a `deployment.yaml`

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: tododeployment
  namespace: todonamespace
spec:
  replicas: 1
  template:
    metadata:
      annotations:
        application.tess.io/name: todoapp
        account.tess.io/name: {username}
      labels:
        run: tododeployment
    spec:
      containers:
        - image: <registry>/<username>/todo-fe:1.0.0
          name: jirastream-fe
          ports:
            - containerPort: 8080
        - image: <registry>/<username>/todo-be:1.0.0
          name: jirastream-be
          ports:
            - containerPort: 8081
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    application.tess.io/name: todoapp
    account.tess.io/name: {username}
  labels:
    name: app
  name: app
  namespace: todonamespace
spec:
  type: LoadBalancer
  selector:
    run: tododeployment
  ports:
    - port: 80
      targetPort: 8080
      name: todo-fe
    - port: 8081
      targetPort: 8081
      name: todo-be
```

#### Boot your app in the cloud

```bash
tess login -c 32
tess init
tess login

tess create namespace todoappnamespace --account {account}
tess create app todoapp --account {account}
tess kubectl create -f deployment.yaml
```

#### Updating your app in the cloud

```
tess kubectl apply -f deployment.yaml
```

#### Debugging

```bash
tess kubectl get all -n todonamespace # Will list all the things
tess kubectl describe po/tododeployment-123abc-af12w -n todonamespace # Will print details about the pod creation
```
