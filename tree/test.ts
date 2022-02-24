import { Node, Tree } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Node has a data and children properties", () => {
  const n = new Node("a");
  assertEquals(n.data, "a");
  assertEquals(n.children.length, 0);
});

Deno.test("Node can add children", () => {
  const n = new Node("a");
  n.add("b");
  assertEquals(n.children.length, 1);
  assertEquals(n.children[0].children, []);
});

Deno.test("Node can remove children", () => {
  const n = new Node("a");
  n.add("b");
  assertEquals(n.children.length, 1);
  n.remove("b");
  assertEquals(n.children.length, 0);
});

Deno.test("Tree starts empty", () => {
  const t = new Tree();
  assertEquals(t.root, null);
});

Deno.test("Can traverse bf", () => {
  const letters: string[] = [];
  const t = new Tree();
  t.root = new Node("a");
  t.root.add("b");
  t.root.add("c");
  t.root.children[0].add("d");

  t.traverseBF((node) => {
    letters.push(node.data);
  });

  assertEquals(letters, ["a", "b", "c", "d"]);
});

Deno.test("Can traverse DF", () => {
  const letters: string[] = [];
  const t = new Tree();
  t.root = new Node("a");
  t.root.add("b");
  t.root.add("d");
  t.root.children[0].add("c");

  t.traverseDF((node) => {
    letters.push(node.data);
  });

  assertEquals(letters, ["a", "b", "c", "d"]);
});
