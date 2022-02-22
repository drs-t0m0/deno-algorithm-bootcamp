import { LinkedList, Node } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("A Node has properties 'data' and 'next'", () => {
  const node = new Node(1, null);
  assertEquals(node.data, 1);
  assertEquals(node.next, null);
});

Deno.test("Insert First appends a node to the start of the list", () => {
  const l = new LinkedList();
  l.insertFirst(1);
  assertEquals(l.head?.data, 1);
  l.insertFirst(2);
  assertEquals(l.head?.data, 2);
});

Deno.test("Size returns the number of items in the linked list", () => {
  const l = new LinkedList();
  assertEquals(l.size(), 0);
  l.insertFirst(1);
  l.insertFirst(1);
  l.insertFirst(1);
  l.insertFirst(1);
  assertEquals(l.size(), 4);
});

Deno.test("GetFirst returns the first element", () => {
  const l = new LinkedList();
  l.insertFirst(1);
  assertEquals(l.getFirst()?.data, 1);
  l.insertFirst(2);
  assertEquals(l.getFirst()?.data, 2);
});

Deno.test("GetLast returns the last element", () => {
  const l = new LinkedList();
  l.insertFirst(2);
  assertEquals(l.getLast()?.data, 2);
  assertEquals(l.getLast()?.next, null);
  l.insertFirst(1);
  assertEquals(l.getLast()?.data, 2);
  assertEquals(l.getLast()?.next, null);
});

Deno.test("Clear empties out the list", () => {
  const l = new LinkedList();
  assertEquals(l.size(), 0);
  l.insertFirst(1);
  l.insertFirst(1);
  l.insertFirst(1);
  l.insertFirst(1);
  assertEquals(l.size(), 4);
  l.clear();
  assertEquals(l.size(), 0);
});

Deno.test("RemoveFirst removes the first node when the list has a size of one", () => {
  const l = new LinkedList();
  l.insertFirst(1);
  l.removeFirst();
  assertEquals(l.size(), 0);
  assertEquals(l.getFirst(), null);
});

Deno.test("RemoveFirst removes the first node when the list has a size of three", () => {
  const l = new LinkedList();
  l.insertFirst(3);
  l.insertFirst(2);
  l.insertFirst(1);
  l.removeFirst();
  assertEquals(l.size(), 2);
  assertEquals(l.getFirst()?.data, 2);
  l.removeFirst();
  assertEquals(l.size(), 1);
  assertEquals(l.getFirst()?.data, 3);
});

Deno.test("RemoveLast removes the last node when list is length 1", () => {
  const l = new LinkedList();
  l.insertFirst(1);
  l.removeLast();
  assertEquals(l.head, null);
});

Deno.test("RemoveLast removes the last node when list is length 2", () => {
  const l = new LinkedList();
  l.insertFirst(2);
  l.insertFirst(1);
  l.removeLast();
  assertEquals(l.size(), 1);
  assertEquals(l.head?.data, 1);
});

Deno.test("RemoveLast removes the last node when list is length 3", () => {
  const l = new LinkedList();
  l.insertFirst(3);
  l.insertFirst(2);
  l.insertFirst(1);
  l.removeLast();

  assertEquals(l.size(), 2);
  assertEquals(l.getLast()?.data, 2);
});

Deno.test("InsertLast adds to the end of the list", () => {
  const l = new LinkedList();
  l.insertFirst(1);
  l.insertLast(2);
  assertEquals(l.size(), 2);
  assertEquals(l.getLast()?.data, 2);
});

Deno.test("GetAt returns the node at given index", () => {
  const l = new LinkedList();
  assertEquals(l.getAt(10), null);

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);

  assertEquals(l.getAt(0)?.data, 1);
  assertEquals(l.getAt(1)?.data, 2);
  assertEquals(l.getAt(2)?.data, 3);
  assertEquals(l.getAt(3)?.data, 4);
});

Deno.test("RemoveAt deletes the first node", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  assertEquals(l.getAt(0)?.data, 1);
  l.removeAt(0);
  assertEquals(l.getAt(0)?.data, 2);
});

Deno.test("RemoveAt deletes the node at the given index", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  assertEquals(l.getAt(1)?.data, 2);
  l.removeAt(1);
  assertEquals(l.getAt(1)?.data, 3);
});

Deno.test("RemoveAt works on the last node", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  assertEquals(l.getAt(3)?.data, 4);
  l.removeAt(3);
  assertEquals(l.getAt(3)?.data, undefined);
});

Deno.test("InsertAt inserts a new node with data at the 0 index when the list is empty", () => {
  const l = new LinkedList();
  l.insertAt(9, 0);
  assertEquals(l.getFirst()?.data, 9);
});

Deno.test("InsertAt inserts a new node with data at the 0 index when the list has elements", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertAt(9, 0);
  assertEquals(l.getAt(0)?.data, 9);
  assertEquals(l.getAt(1)?.data, 1);
  assertEquals(l.getAt(2)?.data, 2);
  assertEquals(l.getAt(3)?.data, 3);
});

Deno.test("InsertAt inserts a new node with data at a middle index", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertAt(9, 2);
  assertEquals(l.getAt(0)?.data, 1);
  assertEquals(l.getAt(1)?.data, 2);
  assertEquals(l.getAt(2)?.data, 9);
  assertEquals(l.getAt(3)?.data, 3);
  assertEquals(l.getAt(4)?.data, 4);
});

Deno.test("InsertAt inserts a new node with data at a last index", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertAt(9, 2);
  assertEquals(l.getAt(0)?.data, 1);
  assertEquals(l.getAt(1)?.data, 2);
  assertEquals(l.getAt(2)?.data, 9);
});

Deno.test("InsertAt insert a new node when index is out of bounds", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertAt(9, 30);

  assertEquals(l.getAt(0)?.data, 1);
  assertEquals(l.getAt(1)?.data, 2);
  assertEquals(l.getAt(2)?.data, 9);
});

Deno.test("ForEach applies a transform to each node", () => {
  const l = new LinkedList();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);

  l.forEach((node) => {
    node.data += 10;
  });

  assertEquals(l.getAt(0)?.data, 11);
  assertEquals(l.getAt(1)?.data, 12);
  assertEquals(l.getAt(2)?.data, 13);
  assertEquals(l.getAt(3)?.data, 14);
});

Deno.test("for...of loops works with the linked list", () => {
  const l = new LinkedList();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);

  for (const node of l) {
    node.data += 10;
  }

  assertEquals(l.getAt(0)?.data, 11);
  assertEquals(l.getAt(1)?.data, 12);
  assertEquals(l.getAt(2)?.data, 13);
  assertEquals(l.getAt(3)?.data, 14);
});
