## Steps

1. Run `./index.js`. You should see an error that the users table does not exist.
2. Run `node_modules/.bin/sequelize db:migrate` and `node_modules/.bin/sequelize db:seed:all`
4. Run `./index.js`. You should see some output.

## Task

Extend the code to allow searches for eye color. Check out the code. You can just uncomment the lines.
To get it to work, you'll need to add a field to the table with the name `eye_color` and add some values here and there.

```
node_modules/.bin/sequelize migration:generate --name add-eye-color
```

## Some references

- https://sequelize.org/master/manual/migrations.html#migration-skeleton

## How to reproduce this project

```
node_modules/.bin/sequelize init # will generate a template project
node_modules/.bin/sequelize model:generate --name User --attributes name:string,avatar:string # creates a new model
node_modules/.bin/sequelize seed:generate --name demo-users # creates a seed file for users
```