// Queue is an abstract data type FIFO (first in - first out).
// Очередь - абстрактный тип данных (первый пришёл - первый вышел).

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return !this.first;
  }

  data() {
    if (this.first === null) {
      console.log('Queue is empty!');
    } else {
      const arrQueue = [];
      function logData(dataQueue) {
        if (dataQueue !== null) {
          arrQueue.push(dataQueue.value);
          logData(dataQueue.next);
        }
      }
      logData(this.first);
      console.log('Queue: ', arrQueue);
    }
  }

  enqueue(value) {
    const oldLast = this.last;
    this.last = new QueueNode(value);
    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }
    this.count += 1;
    return value;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last = null;
      return null;
    }
    let deletedValue = this.first.value;
    this.first = this.first.next;
    this.count -= 1;
    return deletedValue;
  }
}

Object.prototype.toString = () => 'Object JavaScript';
Array.prototype.toString = () => 'Array JavaScript';

const myQueue = new Queue();
console.log(`FIRST   IN -> ${myQueue.enqueue(1)}`);
console.log(`SECOND  IN -> ${myQueue.enqueue(true)}`);
console.log(`THIRD   IN -> ${myQueue.enqueue(null)}`);
console.log(`FOURTH  IN -> ${myQueue.enqueue(undefined)}`);
console.log(`FIFTH   IN -> ${myQueue.enqueue('simple string')}`);
console.log(`SIXTH   IN -> ${myQueue.enqueue({})}`);
console.log(`SEVENTH IN -> ${myQueue.enqueue([])}`);
console.log(`EIGHTH  IN -> ${myQueue.enqueue(function() {})}`);
console.log();
myQueue.data();
console.log();
console.log(`FIRST   OUT -> ${myQueue.dequeue()}`);
console.log(`SECOND  OUT -> ${myQueue.dequeue()}`);
console.log(`THIRD   OUT -> ${myQueue.dequeue()}`);
console.log(`FOURTH  OUT -> ${myQueue.dequeue()}`);
console.log(`FIFTH   OUT -> ${myQueue.dequeue()}`);
console.log(`SIXTH   OUT -> ${myQueue.dequeue()}`);
console.log(`SEVENTH OUT -> ${myQueue.dequeue()}`);
console.log(`EIGHTH  OUT -> ${myQueue.dequeue()}`);
console.log();
myQueue.data();
