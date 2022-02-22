// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

export type NullableNode = Node | null | undefined;
type Fn = (node: Node, counter: number) => void;

export class Node {
  public data: number;
  public next: NullableNode;

  constructor(data: number, next: NullableNode = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  public head: NullableNode;

  constructor() {
    this.head = null;
  }

  insertFirst(data: number): void {
    this.head = new Node(data, this.head);
  }

  size(): number {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst(): NullableNode {
    return this.head;
  }

  getLast(): NullableNode {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear(): void {
    this.head = null;
  }

  removeFirst(): void {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data: number): void {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index: number): NullableNode {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index: number): void {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data: number, index: number): void {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    if (previous) {
      const node = new Node(data, previous.next);
      previous.next = node;
    }
  }

  forEach(fn: Fn): void {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
