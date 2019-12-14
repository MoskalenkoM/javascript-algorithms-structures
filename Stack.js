// Stack is an abstract data type (last in - first out).
// Стек - абстрактный тип данных (последним пришёл - первым вышел).

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  push(value) {
    const oldFirst = this.root;
    this.root = new StackNode(value);
    this.root.next = oldFirst;
    this.count += 1;
    return value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const oldFirst = this.root;
    this.root = oldFirst.next;
    this.count -= 1;
    return oldFirst.value;
  }
}

const myStack = new Stack();

console.log(`first in: ${myStack.push(1)}`);
console.log(`second in: ${myStack.push(true)}`);
console.log(`third in: ${myStack.push(null)}`);
console.log(`fourth in: ${myStack.push('simple string')}`);
console.log();
console.dir(myStack);
console.log();
console.log(`first out: ${myStack.pop()}`);
console.log(`second out: ${myStack.pop()}`);
console.log(`third out: ${myStack.pop()}`);
console.log(`fourth out: ${myStack.pop()}`);
