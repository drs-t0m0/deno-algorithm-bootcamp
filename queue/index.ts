// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

export class Queue {
  private data: number[];

  constructor() {
    this.data = [];
  }

  add(record: number): void {
    this.data.unshift(record);
  }

  remove(): number | undefined {
    return this.data.pop();
  }
}
