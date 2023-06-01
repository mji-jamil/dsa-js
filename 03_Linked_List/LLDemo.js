// 10 -> 5 -> 16

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newValue = {
            value: value,
            next: null,
        };
        newValue.next = this.head;
        this.head = newValue;
        this.length++;

        return this
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.prepend(1);
console.log(myLinkedList);
