const {expect} = require('chai');
const SinglyLinkedList = require('../src/singly-linked-list');

describe('Singly Linked List', () => {
    describe('constructor', () => {
        it('should have a head set to null', () => {
            const list = new SinglyLinkedList();
            expect(list.head).to.equal(null);
        });
    });
    describe('add', () => {
        it('should override head if it does not exist yet', () => {
            const list = new SinglyLinkedList();
            list.add('hello');

            expect(list.head).to.deep.equal({ data: 'hello', next: null });
        });

        it('should append the new element if head exists', () => {
            const list = new SinglyLinkedList();

            list.add('hello');
            list.add('world');

            expect(list.head.data).to.equal('hello');
            expect(list.head.next.data).to.equal('world');
        });
    });
    describe('addFirst', () => { 
        it('should override head if it does not exist yet', () => {
            const list = new SinglyLinkedList();
            list.addFirst('hello');

            expect(list.head).to.deep.equal({ data: 'hello', next: null });
        });
        it('should prepend the new element if head exists', () => {
            const list = new SinglyLinkedList();

            list.addFirst('world');
            list.addFirst('hello');

            expect(list.head.next).to.deep.equal({ data: 'world', next: null });
        });
    });
    describe('clear', () => { });
    describe('contains', () => { });
    describe('get', () => { });
    describe('size', () => { });
    describe('remove', () => { });
});
