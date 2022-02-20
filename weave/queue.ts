// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

type Data = number | string;
type NullableData = Data | undefined;

export class Queue {
  private data: NullableData[];

  constructor() {
    this.data = [];
  }

  add(record: NullableData): void {
    this.data.unshift(record);
  }

  remove(): NullableData {
    return this.data.pop();
  }

  peek(): NullableData {
    return this.data[this.data.length - 1];
  }
}
