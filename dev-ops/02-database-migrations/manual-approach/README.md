## Steps

1. Run `./index.js Miss`. You should see an error that the users table does not exist.
2. Run `./init.js`. This will create the necessary table for you and add some data to it.
3. Run `./index.js Miss`. You should see some output.

## Task

Extend the code to allow searches for eye color. Check out the code. You can just uncomment the lines.
To get it to work, you'll need to add a field to the table with the name `eye_color` and add some values here and there.

## What happened?

We created a table with a certain structure (through the init script). This is essentially what you would do if you had created the table through some UI tool. 
Afterwards a product change made it necessary to change the table. You did that manually.
Problem: Every developer would have to do the same now. Envision this in a company with hundreds of developers.