import { weave } from "./index.ts";
import { Queue } from "./queue.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("peek returns, but does not remove, the first value", () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  assertEquals(q.peek(), 1);
  assertEquals(q.peek(), 1);
  assertEquals(q.remove(), 1);
  assertEquals(q.remove(), 2);
});

Deno.test("weave can combine two queues", () => {
  const one = new Queue();
  one.add(1);
  one.add(2);
  one.add(3);
  one.add(4);
  const two = new Queue();
  two.add("one");
  two.add("two");
  two.add("three");
  two.add("four");

  const result = weave(one, two);
  assertEquals(result.remove(), 1);
  assertEquals(result.remove(), "one");
  assertEquals(result.remove(), 2);
  assertEquals(result.remove(), "two");
  assertEquals(result.remove(), 3);
  assertEquals(result.remove(), "three");
  assertEquals(result.remove(), 4);
  assertEquals(result.remove(), "four");
  assertEquals(result.remove(), undefined);
});
