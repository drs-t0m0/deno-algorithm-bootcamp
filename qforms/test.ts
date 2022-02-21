import { Queue } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Order of elements is maintained", () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.add(3);
  assertEquals(q.remove(), 1);
  assertEquals(q.remove(), 2);
  assertEquals(q.remove(), 3);
  assertEquals(q.remove(), undefined);
});

Deno.test("peek returns, but does not remove, the first value", () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  assertEquals(q.peek(), 1);
  assertEquals(q.peek(), 1);
  assertEquals(q.remove(), 1);
  assertEquals(q.remove(), 2);
});
