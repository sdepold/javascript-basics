module.exports = {
    index(tasks) {
        return withTemplate(`
            ${renderTasksForm()}
            ${tasks.map(renderTask)}
        `);
    }
};

const withTemplate = (content) => `<html>
    <head><title>TODO</title></head>
    <body>
        <h1>To Do App</h1>
        ${content}
    </body>
</html>`

const renderTask = (task) => `
    <div class="task">
        <h2>${task.title}</h2>
        <p>${task.description}</p>
    </div>
`;

const renderTasksForm = () => `<div>
    <form action="/tasks" method="POST">
        Title: <input type="text" name="title"><br>
        Description: <textarea name="description"></textarea><br>
        <input type="submit" value="Add task">
    </form>
</div>`
