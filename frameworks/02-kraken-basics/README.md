02-kraken-basics
===========

Basic Kraken example

## Notes

### Kraken

- Opinionated MVC framework with focus on security
- Prefers configuration over code
- Can be combined easily with Lusca (security), Dust (templating), Makara (i18n)


### Middleware

- Lots of middlewares are used by default (--> https://github.com/krakenjs/kraken-js/blob/v2.x/config/config.json#L14-L152)
- Are enabled and configured through the `config/config.json` file

The structure of the middleware config object is:

```json
        "shutdown": { <-- a random identified
            "enabled": true, <-- defines if middleware is used
            "priority": 0, <-- the order in which the middleware is loaded
            "module": { <-- defines which node module is meant; can either be a string (module name) or an object
                "name": "kraken-js/middleware/shutdown", <-- module name
                "arguments": [{ <-- aditional arguments that are given to the middlewares constructor
                    "timeout": 30000,
                    "template": null
                }]
            }
        },
```

### MVC

- Controllers folder structure are to match the url structure (e.g. `/tasks` --> `controllers/tasks/index.js`)
- Views can be rendered through `res.render('tasks', model);` in the controller
- Views are living in `public/templates/`
- There is no default persistance layer in Kraken (i.e. you can use any available persistance library like Sequelize)
- Models are living in the `models` directory.

## Instructions

Let's build a todo application where you can add your personal tasks, mark them as accomplished as well as remove them again.

1. Create a controller to handle all tasks related actions. Start with the page that lists all tasks.
2. Create a task related View that is used in your controller and which contains the entire HTML for your page.
3. Add a form to that page which allows the creation of a new task (e.g. title + description). The form should perform a POST request.
4. Extend the existing controller to handle the post request.
5. Create a Task model that handles reading, creating, deleting and updating of tasks. For the sake of simplicity, you could store the tasks in a local variable. Try to make the model asynchronous, so that we could replace it later with a real database connection.
6. Wiring things up: The controller should use the tasks Model to read and manipulate tasks. Hand over to the retrieved data to the view and send the result to the consumer.
7. Add the possibility to delete a task.
8. Cover the View and Model layer with tests.
9. Bonus: Add the possibility to mark a task as completed.
