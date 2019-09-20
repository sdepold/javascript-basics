const {expect} = require('chai');
const DoublyLinkedList = require('../src/doubly-linked-list');

describe('Singly Linked List', () => {
    describe('constructor', () => {
        it('should have a head set to null', () => {
            const list = new DoublyLinkedList();
            expect(list.head).to.equal(null);
        });
    });
    describe('add', () => {
        it('should override head if it does not exist yet', () => {
            const list = new DoublyLinkedList();
            list.add('hello');

            expect(list.head).to.deep.equal({ data: 'hello', next: null, prev: null });
        });

        it('should append the new element if head exists', () => {
            const list = new DoublyLinkedList();

            list.add('hello');
            list.add('world');

            expect(list.head.data).to.equal('hello');
            expect(list.head.next.data).to.equal('world');
            expect(list.head.next.prev).to.equal(list.head);
        });
    });
    describe('addFirst', () => { 
        it('should override head if it does not exist yet', () => {
            const list = new DoublyLinkedList();
            list.addFirst('hello');

            expect(list.head).to.deep.equal({ data: 'hello', next: null, prev: null });
        });
        it('should prepend the new element if head exists', () => {
            const list = new DoublyLinkedList();

            list.addFirst('world');
            list.addFirst('hello');

            expect(list.head).to.deep.equal({ data: 'hello', next: list.head.next, prev: null });
            expect(list.head.next).to.deep.equal({ data: 'world', next: null, prev: list.head });
        });
    });
    describe('clear', () => { });
    describe('contains', () => { });
    describe('get', () => { });
    describe('size', () => { });
    describe('remove', () => { });
});
