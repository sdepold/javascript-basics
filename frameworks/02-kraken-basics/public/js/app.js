/*global requirejs:true*/
'use strict';


requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
            const csrfToken = document.querySelector("head meta[name='csrf-token']").content;

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
                        method: 'DELETE',
                        headers: {
                            'x-csrf-token': csrfToken
                        }
                    }).then(() => task.remove());
                });

                completeButton.addEventListener('click', () => {
                    fetch(`/tasks/${task.dataset.taskId}`, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            _csrf: csrfToken,
                            status: 'completed'
                        }),
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
        }
    };

    app.initialize();

});
