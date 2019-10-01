# Data Types | 01 Linked Lists

## Arrays in JS

- https://stackoverflow.com/a/5048482
- http://es5.github.io/#x15.4
- Typed arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
- Array in JS are essentially objects and in contrast to other programming languages, the memory for arrays are not contiguous

## Idea

- A linked list is a list of nodes which consist of an information and a pointer(s) to other node
- The head of the list is essentially only a pointer to a node.
- Singly linked lists have nodes that only point to the next node
- Doubly linked lists have nodes that points to the previous and the next node

## Advantages of linked lists

- Linked List is Dynamic data Structure.
- Linked List can grow and shrink during run time.
- Insertion and Deletion Operations are Easier
- Efficient Memory Utilization ,i.e no need to pre-allocate memory
- Faster Access time,can be expanded in constant time without memory overhead

## Disadvantages
- Arrays are faster when it comes to random access. They are clear winners here as random access needs linear time in case of linked lists, but only constant time in arrays.
- Arrays are faster when you iterate from the beginning to the end because of spatial and temporal locality because of which they can make use of cache.

## Methods of linked lists

The following is a selection of typical methods on linked lists

- add: It is used to append the specified element to the end of a list.
- addFirst: It is used to insert the given element at the beginning of a list.
- clear: It is used to remove all the elements from a list.
- contains: It is used to return true if a list contains a specified element.
- get(int index): It is used to return the element at the specified position in a list.
- size: It is used to return the number of elements in a list.
- remove: It is used to retrieve and removes the first element of a list.
- remove(int index): It is used to remove the element at the specified position in a list.

