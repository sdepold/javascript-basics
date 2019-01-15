# App Architecture 01 | Model View Controller

- App architecture is about structuring code
- MVC organizes code into 3 different buckets
- Code is either a model, a view or a controller

## Definitions

### Model

- Contains the business logic
- Defines the structure of data
- Knows how to store and retrieve data from potentially remote storages

### View

- Takes data and populates templates to generate consumer facing HTML or JSON
- No access to databases, no access to request/response objects, only accesses the passed data

### Controller

- Is the glue between the model and view layer
- Typically has access to some meta information about the consumers needs
- Gathers data from the model layer, passes it to the view and finally returns the response to the consumer

## Applying MVC to an Express application

### App structure

- index.js --> Main entry point for the application
- controllers --> Directory that contains all controllers / routes
- models --> Directory that contains all models / data sources
- views --> Directory that contains all views

### Tiny wiring start script

- Checkout the index.js
- Sets up a basic express app
- Loads every controller and adds it to the routings
- Runs the app

### Examples

<details>
<summary>The following code snippet is describing a Task model</summary>
<p>

e.g. `models/task.js`

```javascript
const uuid = require("uuid/v4");

const tasks = []; // This is our data storage for now

module.exports = {
  find: id => tasks.find(task => task.id === id),
  findAll: () => tasks,
  remove: id => tasks = tasks.filter(task => task.id !== id),
  add: task => tasks.push(Object.assign({ id: uuid() }, task))
};
```

Please note, that function are currently synchronous and it might be a better idea to use promises instead.
</p>
</details>

<details>
<summary>The following snippet shows an exemplary Task related view</summary>
<p>

e.g. `views/tasks.js`

```js
module.exports = {
    index(tasks) {
        return `<html>
            <head><title>TODO</title></head>
            <body>
                <h1>To Do App</h1>
                ${tasks.map(task => `
                    <div class="task">
                        <h2>${task.title}</h2>
                        <p>${task.description}</p>
                    </div>
                `).join("")}
            </body>
        </html>`;
    }
};
```
</p>
</details>

<details>
<summary>The following snippet shows a controller around tasks</summary>
<p>

e.g. `controllers/tasks.js`

```js
const { Router } = require("express");
const tasksController = Router();

const Task = require("../models/task");
const TasksView = require("../views/tasks");

tasksController.get("/tasks", (req, res) => {
  const tasks = Task.findAll();
  const html = TasksView.index(tasks);

  res.send(html);
});

module.exports = tasksController;
```
</p></details>
