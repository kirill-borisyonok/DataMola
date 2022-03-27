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

    addNode(data) {
        const node = new Node(data);
        let current = this.root;

        if (!this.root) {
            this.root = node;
        }

        while (current.next) {
            current = current.next;
        }

        current.next = node;

        this.length += 1;
    }

    removeNode(position) {
        let current = this.root,
            length = this.length,
            count = 1,
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        if (position < 0 || position > length) {
            return false;
        }

        if (position === 1) {
            this.root = current.next;
            deletedNode = current;
            current = null;
            this.length--;

            return deletedNode;
        }

        while (count < position) {
            beforeNodeToDelete = current;
            nodeToDelete = current.next;
            current = current.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length--;

        return deletedNode;
    }

    print() {
        const output = [];
        let current = this.root;

        while (current) {
            output.push(current);
            current = current.next;
        }

        const outputData = [];

        for (let item of output) {
            outputData.push(item.value);
        }

        return outputData.join(', ');
    }
}

let list = new List(1);

// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// list.addNode(6);
// list.addNode(7);

// list.removeNode(1);
// list.removeNode(2);
// list.removeNode(3);
// list.removeNode(7);
// list.removeNode(5);


// list.addNode(1);

// console.log(list.print());

// console.log(list);