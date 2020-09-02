# DevOps 01 | Docker / Kubernetes

This lesson focusses on Docker and Kubernetes.

## Docker

TBD: What is it?

### Steps

The following steps explain how to dockerize the TODO application of [the MVC lesson](../../architecture/01-model-view-controller).

![todo-app](./todo-app.png)

#### 1. Get and prepare the TODO app

```
git clone https://github.com/sdepold/javascript-basics.git
cp -r javascript-basics/architecture/01-model-view-controller todo-app
cd todo-app
yarn
```

#### 1.1. Optional: Give it a try

```
yarn start
# Open http://localhost:3000/tasks
```

#### 2. Create a `Dockerfile`

Inside your todo-app folder, create a file called `Dockerfile` and add the following content:

```dockerfile
FROM node:12
EXPOSE 3000
WORKDIR /srv/todo-app
ADD . /srv/todo-app
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start"]
```

#### 3. Create a Docker image

```bash
docker build -t <registry>/<username>/<project>:1.0.0 .
# e.g. docker build -t <registry>/sdepold/todo-app:1.0.0 .
```

![docker build](./docker-build.png)

#### 4. Try the build locally

```bash
docker run -p 3000:3000 <registry>/<username>/<project>:1.0.0
# e.g. docker run -p 3000:3000 <registry>/sdepold/todo-app:1.0.0
```

You should be able to open your application on http://localhost:3000 now.

Once done, you can stop it via:

```bash
docker ps # find the container id
docker kill <container id>
```

#### 5. Use a database

Create a local pg database called "todo-app".
You can now run `yarn start:db` to use it and create persistent tasks.

Let's update the Dockerfile accordingly:

```dockerfile
FROM node:12
EXPOSE 3000
WORKDIR /srv/todo-app
ADD . /srv/todo-app
RUN yarn
ENV NODE_ENV production
CMD ["yarn", "start:db"]
```

```bash
docker build -t <registry>/<username>/<project>:1.1.0 .
docker run -p 3000:3000 -e DATABASE_URL=postgres://postgres:postgres@host.docker.internal:5432/todo-app <registry>/<username>/<project>:1.1.0
```

#### 6. Push the Docker image to the hub

```bash
docker login <registry>
docker push <registry>/<username>/<project>:1.1.0
# e.g. docker push <registry>/sdepold/todo-app:1.1.0
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
