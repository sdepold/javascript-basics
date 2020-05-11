# Data Types | 02 Stacks

## Idea

- Abstract data type that manages a collection of element
- Two principle methods: **push** (adding an element) and **pop** (removing an element)
- Optional method: **peak** (returns the current top most element)
- Order in which elements come off a stack: Last in, first out (so-called LIFO)

## Examples

- Stack trace in JS
- Browser history / back button
- Undo in text editors
- Backtracking in mazes
- A stack of plates

![Plates](https://upload.wikimedia.org/wikipedia/commons/1/19/Tallrik_-_Ystad-2018.jpg)

## Let's do it

### What?

```
class Stack {
  constructor() {
  }

  // adds a value onto the top of our stack
  push(value) {}

  // remove top-most/last value and return it
  pop() {}

  // return current top-most/last value
  peek() {}
}
```

![Methods](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

### How?

- Let's write the tests first
- Then copy the template above
- Finally implement the class; different approaches
    - Array
    - Linked List
    - Object
