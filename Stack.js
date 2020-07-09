class StackNode {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
}

class Stack {
  constructor() {
    this._root = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  push(value) {
    const oldFirst = this._root;
    this._root = new StackNode(value);
    this._root._next = oldFirst;
    this._size += 1;
    return value;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const oldFirst = this._root;
    this._root = oldFirst._next;
    this._size -= 1;
    return oldFirst._value;
  }

  data() {
    if(this.isEmpty()) {
      console.log('Stack: empty!');
      return;
    }
    let arrStack = [];
    function logData(dataStack) {
      if (dataStack !== null) {
        arrStack.push(dataStack._value);
        logData(dataStack._next);
      }
    }
    logData(this._root);
    console.log('Stack: ');
    arrStack.forEach(node => console.log(node));
    arrStack = null;
  }
}

const stack = new Stack();


console.log(`1 in: ${stack.push(1)}`);
console.log(`2 in: ${stack.push(true)}`);
console.log(`3 in: ${stack.push('string')}`);
console.log(`4 in: ${stack.push(null)}`);
console.log(`5 in: ${stack.push(undefined)}`);
console.log(`6 in: ${stack.push({ name: 'object' })}`);
console.log(`7 in: ${stack.push([1, 2, 3])}`);
console.log(`8 in: ${stack.push(function func() {})}`);

console.log('-'.repeat(25));
stack.data();
console.log('-'.repeat(25));
console.log('размер стека: ', stack.size);
console.log('-'.repeat(25));

console.log(`1 out: ${stack.pop()}`);
console.log(`2 out: ${stack.pop()}`);
console.log(`3 out: ${stack.pop()}`);
console.log(`4 out: ${stack.pop()}`);
console.log(`5 out: ${stack.pop()}`);
console.log(`6 out: ${stack.pop()}`);
console.log(`7 out: ${stack.pop()}`);
console.log(`8 out: ${stack.pop()}`);

console.log('-'.repeat(25));
stack.data();
console.log('-'.repeat(25));
console.log('размер стека: ', stack.size);
console.log('-'.repeat(25));