// https://beginnersbook.com/2013/12/linkedlist-in-java-with-example/
// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

/*
    Structure

    List 
    --> Head (data, next)
                       --> Node (data, next)
                                        --> Node (data, next)
                                                          --> null

    e.g.

    List
    -> Node(10, --> Node(20, --> Node(30, null)))
*/

module.exports = class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // It is used to append the specified element to the end of a list.
    add(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let node = this.head;

            while (node.next) {
                node = node.next;
            }

            node.next = new Node(data);
            node.next.prev = node;
        }
    }

    // It is used to insert the given element at the beginning of a list.
    addFirst(data) {
        const node = new Node(data);

        if(this.head) {
            this.head.prev = node;
        }

        node.next = this.head;
        
        this.head = node;
    }

    // It is used to remove all the elements from a list.
    clear() { }

    // It is used to return true if a list contains a specified element.
    contains() { }

    // It is used to return the element at the specified position in a list.
    get(index) { }

    // It is used to return the number of elements in a list.
    size() { }

    // It is used to retrieve and removes the first element of a list.
    remove() { }

    // It is used to remove the element at the specified position in a list.
    remove(index) { }
};

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

