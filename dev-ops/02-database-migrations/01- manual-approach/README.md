## Steps

1. Run `./index.js`. You should see an error that the users table does not exist.
2. Manually create a table called `users` with the columns `ID INTEGER PRIMARY KEY AUTOINCREMENT`, `name VARCHAR(255)`, `avatar VARCHAR(255)`.
3. Seed the table (see below).
4. Run `./index.js`. You should see some output.

### Seeding

Just run the following SQL query:

```
INSERT INTO users (name, avatar) VALUES ('Bettye Bernhard', 'https://s3.amazonaws.com/uifaces/faces/twitter/helderleal/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Lavonne Hane', 'https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Bernice Armstrong', 'https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Chris Terry III', 'https://s3.amazonaws.com/uifaces/faces/twitter/chadami/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Alisa Ernser', 'https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Merlin Runolfsson V', 'https://s3.amazonaws.com/uifaces/faces/twitter/lebronjennan/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Antone Stiedemann', 'https://s3.amazonaws.com/uifaces/faces/twitter/joreira/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Lawson Kerluke', 'https://s3.amazonaws.com/uifaces/faces/twitter/johncafazza/128.jpg')
INSERT INTO users (name, avatar) VALUES ('Monty Tremblay', 'https://s3.amazonaws.com/uifaces/faces/twitter/baumann_alex/128.jpg')
```

## Task

Extend the code to allow searches for eye color. Check out the code. You can just uncomment the lines.
To get it to work, you'll need to add a field to the table with the name `eye_color` and add some values here and there.

## What happened?

We created a table with a certain structure via some UI tool. 
Afterwards a product change request made it necessary to change the table. You did that manually.

Problem: Every developer would have to do the same now. Envision this in a company with hundreds of developers.