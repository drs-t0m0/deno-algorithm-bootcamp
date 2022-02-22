import { fromLast } from "./index.ts";
import { LinkedList } from "./linkedlist.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("fromLast returns the node n elements from the end", () => {
  const l = new LinkedList();

  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertLast(5);

  assertEquals(fromLast(l, 3)?.data, 2);
});
