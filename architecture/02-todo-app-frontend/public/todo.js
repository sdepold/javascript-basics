document.querySelectorAll('.task').forEach((task) => {
    const title = task.querySelector('.toggle-description');
    const description = task.querySelector('.description');
    const deleteButton = task.querySelector('.delete-task');
    const completeButton = task.querySelector('.complete');

    title.addEventListener('click', () => {
        description.classList.toggle('hidden');
    });

    deleteButton.addEventListener('click', () => {
        fetch(`/tasks/${task.dataset.taskId}`, {
            method: 'DELETE'
        }).then(() => task.remove());
    });

    completeButton.addEventListener('click', () => {
        fetch(`/tasks/${task.dataset.taskId}`, {
            method: 'PATCH',
            body: JSON.stringify({ status: 'completed' }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => location.reload());
    });
});

document.querySelector('.add-todo a').addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.querySelector('form');

    form.classList.toggle('hidden');
});
