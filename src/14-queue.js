// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.mass = [];
  }

  get size() {
    return this.mass.length;
  }

  enqueue(element) {
    this.mass.push(element);
  }

  dequeue() {
    return this.mass.shift();
  }
}

module.exports = Queue;
