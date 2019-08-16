module.exports = (taskLists) => `
    <div class="task-lists">
        <ul>${taskLists.map(renderTaskList).join('')}</ul>
        <div class="list-selector">My todo list</div>
        <div class="todos">
            <ul>taskLists.map(renderTask).join('')</ul>
        </div>
        <div class="add-todo">
            <a href="#">
                <i class="fas fa-plus"></i>
                New Task
            </a>
        </div>
    </div>
`;


function renderTaskList(taskList) {
    return `<li>${taskList.title}</li>`;
}
