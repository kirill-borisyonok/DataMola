'use strict';

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class List {
    constructor(value) {
        this._length = 1;
        this.root = new Node(value);
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }

    addNode(data, position = this.length) {
        let count = 0;

        if (position < 0 || position > this.length) {
            return false;
        }

        const node = new Node(data);
        let current = this.root;

        if (!this.root) {
            this.root = node;
        }

        if (position === 0) {
            node.next = current.next;
            this.root.next = node;
            this.length += 1;
            return true;
        }

        while (current.next && count < position) {
            current = current.next;
            count += 1;
        }

        node.next = current.next;
        current.next = node;

        this.length += 1;

        return true;
    }

    removeNode(position = this.length - 1) {
        let current = this.root;
        let length = this.length;
        let count = 0;
        let beforeNodeToDelete = null;
        let nodeToDelete = null;

        if (position < 0 || position > length - 1 || current.next == null) {
            return false;
        }

        if (position === 0) {
            this.root = current.next;
            current = null;
            this.length -= 1;

            return true;
        }

        while (count < position) {
            beforeNodeToDelete = current;
            nodeToDelete = current.next;
            current = current.next;
            count += 1;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        nodeToDelete = null;
        this.length -= 1;

        return true;
    }

    print() {
        const output = [];
        let current = this.root;

        while (current) {
            output.push(current);
            current = current.next;
        }

        return output.map(item => item.value).join(', ');
    }
}

let list = new List(1);

list.addNode(2);
list.addNode(3);
list.addNode(4, 0);
list.addNode(5, 1);
list.addNode(6, 0);
list.addNode(7);
// list.addNode(6, 10);

list.removeNode(1);
list.removeNode(1);
list.removeNode(5);
// list.removeNode();
// list.removeNode(2);
// list.removeNode(2);
// list.removeNode(1);
// list.removeNode(0);

// list.removeNode();
// list.removeNode();

console.log(list.print());

console.log(list);
