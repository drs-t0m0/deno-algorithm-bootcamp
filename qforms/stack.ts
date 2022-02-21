export class Stack {
  private data: number[];

  constructor() {
    this.data = [];
  }

  push(record?: number): void {
    if (record) {
      this.data.push(record);
    }
  }

  pop(): number | undefined {
    return this.data.pop();
  }

  peek(): number {
    return this.data[this.data.length - 1];
  }
}
