// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

type NullableNode = Node | null;
type Fn = (node: Node) => void;

export class Node {
  public data: string;
  public children: Node[];

  constructor(data: string) {
    this.data = data;
    this.children = [];
  }

  add(data: string): void {
    this.children.push(new Node(data));
  }

  remove(data: string): void {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

export class Tree {
  public root: NullableNode;

  constructor() {
    this.root = null;
  }

  traverseBF(fn: Fn): void {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      if (node) {
        arr.push(...node.children);
        fn(node);
      }
    }
  }

  traverseDF(fn: Fn): void {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      if (node) {
        arr.unshift(...node.children);
        fn(node);
      }
    }
  }
}
