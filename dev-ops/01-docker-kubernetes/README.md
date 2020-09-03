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

#### 7. Publish the docker image in the registry

For later usage, it is now necessary to find the docker image in the registry and to publish it.


## Kubernetes

TBD: What is it?

Cheatsheet: https://kubernetes.io/docs/reference/kubectl/cheatsheet/#viewing-finding-resources
Info on DNS: https://tess.io/userdocs/network/kubedns/

### Terminology

#### Application (tess specific)

The application object would let Tess know who the owner is, what kind of application is being deployed, whom we should contact/escalated when required etc. Hence Owner and Escalation Owner fields of an Application object is mandatory. 

#### Deployment

#### Service

#### Namespace


#### Pod

### Steps

#### 1. Create a `deployment.yaml`

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: todoapp-deployment
  namespace: todoapp-ns
spec:
  replicas: 1
  template:
    metadata:
      annotations:
        application.tess.io/name: todoapp
        account.tess.io/name: sdepold
      labels:
        run: todoapp-deployment
    spec:
      containers:
        - name: app
          image: hub.tess.io/sdepold/todo-app:1.1.0
          ports:
            - containerPort: 3000
          env:
            - name: DATABASE_URL
              value: 'postgres://postgres:postgres@localhost:5432/todo-app'
            - name: TEST
              value: test
        - name: database
          image: postgres
          ports:
            - containerPort: 5432
          env:
            - name: POSTGRES_PASSWORD
              value: 'password'
          volumeMounts:
            - name: postgres-initdb
              mountPath: /docker-entrypoint-initdb.d
      volumes:
        - name: postgres-initdb
          configMap:
            name: postgres-initdb-config
---
apiVersion: v1
kind: Service
metadata:
  annotations:
    application.tess.io/name: todoapp
    account.tess.io/name: sdepold
  labels:
    name: app
  name: app
  namespace: todoapp-ns
spec:
  type: LoadBalancer
  selector:
    run: todoapp-deployment
  ports:
    - port: 80
      targetPort: 3000
      name: app
    - port: 5432
      targetPort: 5432
      name: database
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: postgres-initdb-config
  namespace: todoapp-ns
data:
  initdb.sql: |
    CREATE DATABASE "todo-app";
    GRANT ALL PRIVILEGES ON DATABASE "todo-app" TO postgres;
```

#### 2. Useful commands

```bash
tess describe application <appname> # Get meta information about an application
tess edit app <appname> # Opens your default text editor and allows editing of apps
```

#### 3. Boot your app in the cloud

Download the tess CLI from https://tess.io/download/.

```bash
tess login -c 32
tess init
tess login

tess create namespace <namespace> --account <username>
tess create app todoapp --account <username> --owner=<username> --escalationOwner=<managerUsername>
tess kubectl create -f deployment.yaml
```

#### 4. Current status

```bash
tess kubectl get all -n <namespace> # List all things inside of our namespace
tess kubectl describe <pid id> -n <namespace> # Print pod details
tess kubectl logs <pod id> -n <namespace> <container name> # Get the logs of a pod's container
```

#### 5. Updating your app in the cloud

```
tess kubectl apply -f deployment.yaml
```
