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

  data() {
    if (this.root === null) {
      console.log('Stack is empty!');
    } else {
      const arrStack = [];
      function logData(dataStack) {
        if (dataStack !== null) {
          arrStack.push(dataStack.value);
          logData(dataStack.next);
        }
      }
      logData(this.root);
      console.log('Stack: ', arrStack);
    }
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

Object.prototype.toString = () => 'Object JavaScript';
Array.prototype.toString = () => 'Array JavaScript';

console.log(`FIRST   IN -> ${myStack.push(1)}`);
console.log(`SECOND  IN -> ${myStack.push(true)}`);
console.log(`THIRD   IN -> ${myStack.push('simple string')}`);
console.log(`FOURTH  IN -> ${myStack.push(null)}`);
console.log(`FIFTH   IN -> ${myStack.push(undefined)}`);
console.log(`SIXTH   IN -> ${myStack.push({})}`);
console.log(`SEVENTH IN -> ${myStack.push([])}`);
console.log(`EIGHTH  IN -> ${myStack.push(function() {})}`);
console.log();
myStack.data();
console.log();
console.log(`FIRST   OUT -> ${myStack.pop()}`);
console.log(`SECOND  OUT -> ${myStack.pop()}`);
console.log(`THIRD   OUT -> ${myStack.pop()}`);
console.log(`FOURTH  OUT -> ${myStack.pop()}`);
console.log(`FIFTH   OUT -> ${myStack.pop()}`);
console.log(`SIXTH   OUT -> ${myStack.pop()}`);
console.log(`SEVENTH OUT -> ${myStack.pop()}`);
console.log(`EIGHTH  OUT -> ${myStack.pop()}`);
console.log();
myStack.data();
