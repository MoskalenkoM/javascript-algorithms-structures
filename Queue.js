class QueueNode {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
}

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(value) {
    const oldLast = this._last;
    this._last = new QueueNode(value);

    if (this.isEmpty()) {
      this._first = this._last;
    } else {
      oldLast._next = this._last;
    }
    this._size += 1;
    return value;
  }

  dequeue() {
    if (this.isEmpty()) {
      this._last = null;
      return null;
    }
    let deletedValue = this._first._value;
    this._first = this._first._next;
    this._size -= 1;
    return deletedValue;
  }

  data() {
    if (this._first === null) {
      console.log('Queue: empty!');
      return;
    }
    let arrQueue = [];
    function logData(dataQueue) {
      if (dataQueue !== null) {
        arrQueue.push(dataQueue._value);
        logData(dataQueue._next);
      }
    }
    logData(this._first);
    console.log('Queue: ');
    arrQueue.forEach(node => console.log(node));
    arrQueue = null;
  }
}

const queue = new Queue();
console.log(`1 in -> ${queue.enqueue(1)}`);
console.log(`2 in -> ${queue.enqueue(true)}`);
console.log(`3 in -> ${queue.enqueue(null)}`);
console.log(`4 in -> ${queue.enqueue(undefined)}`);
console.log(`5 in -> ${queue.enqueue('string')}`);
console.log(`6 in -> ${queue.enqueue({ name: 'object' })}`);
console.log(`7 in -> ${queue.enqueue([1, 2, 3])}`);
console.log(`8 in -> ${queue.enqueue(function func() {})}`);
console.log('-'.repeat(25));
queue.data();
console.log('-'.repeat(25));
console.log('размер очереди:', queue.size);
console.log('-'.repeat(25));
console.log(`1 out -> ${queue.dequeue()}`);
console.log(`2 out -> ${queue.dequeue()}`);
console.log(`3 out -> ${queue.dequeue()}`);
console.log(`4 out -> ${queue.dequeue()}`);
console.log(`5 out -> ${queue.dequeue()}`);
console.log(`6 out -> ${queue.dequeue()}`);
console.log(`7 out -> ${queue.dequeue()}`);
console.log(`8 out -> ${queue.dequeue()}`);
console.log('-'.repeat(25));
queue.data();
console.log('-'.repeat(25));
console.log('размер очереди:', queue.size);
