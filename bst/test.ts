import { Node } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Node can insert correctly", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  assertEquals(node.left?.data, 5);
  assertEquals(node.right?.data, 15);
  assertEquals(node.right?.right?.data, 17);
});

Deno.test("Contains returns node with the same data", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  const three = node.left?.left?.right;
  assertEquals(node.contains(3), three);
});

Deno.test("Contains returns null if value not found", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  assertEquals(node.contains(9999), null);
});
