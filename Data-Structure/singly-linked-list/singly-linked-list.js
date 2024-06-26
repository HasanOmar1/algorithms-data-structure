// piece of data  - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
}

let list = new SinglyLinkedList();

// push
list.push("First");
list.push("Second");
list.push("Third");

// console.log(list);
// console.log(list.head);
// console.log(list.tail);
// console.log(list.head.next);

// -------------------------------------------

// pop

// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// -------------------------------------------

// shift [removes first node]

// list.shift();
// list.shift();
// list.shift();
// console.log(list);

// -------------------------------------------

// unshift [adds new node at first position]

// list.unshift(`Zero`);
// console.log(list);

// -------------------------------------------

// get [ gets the node]

// console.log(list.get(0));
// console.log(list.get(1));

// -------------------------------------------

// set [ updates the node]

// console.log(list.set(0, "NEW"));
// console.log(list);

// -------------------------------------------
