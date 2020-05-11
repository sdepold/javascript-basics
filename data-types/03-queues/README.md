# Data Types | 03 Queues

## Idea

- Abstract data type that manages a collection of element
- Order in which elements come off a stack: First in, first out (so-called FIFO)
- Two principle methods: **enqueue** (adding an element to the start of the list) and **dequeue** (removing an element from the end of the list)
- Optional method: **peak** (returns the last element)

## Examples

- Printer queues
- Supermarket queues

## Let's do it

### What?

```
class Queue {
  constructor() {
  }

  // Adds item at the start of the list
  enqueue(value) {}

  // Removes and returns the oldest element
  dequeue() {}
  
  // Returns oldest item in the list
  peek() {}
}
```

![How it works](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/600px-Data_Queue.svg.png)

### How?

- Let's write the tests first
- Then copy the template above
- Finally implement the class; different approaches
    - Array
    - Linked List
    - Object
