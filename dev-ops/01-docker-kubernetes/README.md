# DevOps 01 | Docker

This lesson focusses on Docker.

## Docker

### What is it?

- Set of platform as a service (PaaS) products 
- Uses OS-level virtualization to deliver software in packages called containers

### Components

- Docker daemon: Persistent process that manages Docker containers and handles container objects
- Docker container: Standardized, encapsulated environment that runs applications
- Docker image: Read-only template used to build containers
- Docker registry: Repository for Docker images

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

Please note: Using `yarn start` will actually store the data in-memory and its lost upon restart.

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

If you run it again, you'll notice that the data disappears.

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

You should be able to open your application on http://localhost:3000 now.
The data should be persisted in your local PostgreSQL database.

#### 6. Push the Docker image to the hub

```bash
docker login <registry>
docker push <registry>/<username>/<project>:1.1.0
# e.g. docker push <registry>/sdepold/todo-app:1.1.0
```

#### 7. Publish the docker image in the registry

For later usage, it is now necessary to find the docker image in the registry and to publish it.

#### 8. Docker Compose

Not covered in this session but Docker allows the orchestration of multi-container application via `docker-compose`.
Find more info about it here: https://docs.docker.com/compose/
