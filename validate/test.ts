import { validate } from "./index.ts";
import { Node } from "./node.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Validate recognizes a valid BST", () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(0);
  node.insert(20);

  assertEquals(validate(node), true);
});
