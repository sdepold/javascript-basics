const template = require('../template');

module.exports = (tasks) => template(`
    <div class="content">
        <div class="list-selector">My todo list</div>
        <div class="todos" id="todos"></div>
        <div class="add-todo">
            <a href="#">
                <i class="fas fa-plus"></i>
                New Task
            </a>
        </div>
        ${renderTasksForm()}
    </div>
`);

const renderTasksForm = () => `<div>
    <form id="create-task-form" method="POST" class="hidden">
        <input placeholder="Title" type="text" name="title" required>
        <textarea placeholder="Description" name="description"></textarea>
        <input type="submit" value="Add task">
    </form>
</div>`
