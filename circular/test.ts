import { circular } from "./index.ts";
import { LinkedList, Node } from "./linkedlist.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("circular detects circular linked lists", () => {
  const l = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  assertEquals(circular(l), true);
});

Deno.test("circular detects circular linked lists linked at the head", () => {
  const l = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = a;

  assertEquals(circular(l), true);
});

Deno.test("circular detects non-circular linked lists", () => {
  const l = new LinkedList();
  const a = new Node(1);
  const b = new Node(2);
  const c = new Node(3);

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = null;

  assertEquals(circular(l), false);
});
