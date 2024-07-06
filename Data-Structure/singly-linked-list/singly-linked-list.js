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
    // adds node to the end of the list
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
    // removes last node
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
    // removes first node
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val) {
    // adds node to the start of the list
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

  set(index, value) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    // adds new node at given index
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    // removes node at given index
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop(index);
    if (index === 0) return this.shift(index);

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;

    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      // or while(node !== null)
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();

// push
list.push("1");
list.push("2");
list.push("3");

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

// list.unshift(`0`);
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

// insert

// console.log(list.insert(1, "1.5"));
// console.log(list.get(1));
// console.log(list);

// -------------------------------------------

// remove

// list.remove(1);
// console.log(list.get(1));
// console.log(list);

// -------------------------------------------

// reverse

// console.log(list.reverse());

// -------------------------------------------

// time complexity

// insertion O(1)
// removal O(1) if we remove the first node or O(n) if we remove the last node
// searching O(n)
// access O(n)
