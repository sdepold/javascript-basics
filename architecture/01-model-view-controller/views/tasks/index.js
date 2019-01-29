const template = require('../template');

module.exports = (tasks) => template(`
    <div class="content">
        <div class="list-selector">My todo list</div>
        <div class="todos">
            <ul>${tasks.map(renderTask).join('')}</ul>
        </div>
        <div class="add-todo">
            <a href="#">
                <i class="fas fa-plus"></i>
                New Task
            </a>
        </div>
        ${renderTasksForm()}
    </div>
`);

const renderTask = (task) => `
    <li class="task ${task.status}" data-task-id=${task.id}>
        <span class="title">
            <i class="far fa-circle complete"></i>
            ${task.title}
        </span>
        <i class="far fa-trash-alt delete-task"></i>
        <i class="far fa-file-alt toggle-description"></i>
        <p class="description hidden">${task.description}</p>
    </li>
`;

const renderTasksForm = () => `<div>
    <form action="/tasks" method="POST" class="hidden">
        <input placeholder="Title" type="text" name="title" required>
        <textarea placeholder="Description" name="description"></textarea>
        <input type="submit" value="Add task">
    </form>
</div>`
