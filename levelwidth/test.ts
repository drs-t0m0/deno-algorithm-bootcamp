import { levelwidth } from "./index.ts";
import { Node } from "./node.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("levelWidth returns number of nodes at widest point", () => {
  const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

  assertEquals(levelwidth(root), [1, 3, 2]);
});

Deno.test("levelWidth returns number of nodes at widest point", () => {
  const root = new Node(0);
  root.add(1);
  root.children[0].add(2);
  root.children[0].add(3);
  root.children[0].children[0].add(4);

  assertEquals(levelwidth(root), [1, 1, 2, 1]);
});
