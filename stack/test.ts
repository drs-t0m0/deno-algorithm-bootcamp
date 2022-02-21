import { Stack } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("stack can add and remove items", () => {
  const s = new Stack();
  s.push(1);
  assertEquals(s.pop(), 1);
  s.push(2);
  assertEquals(s.pop(), 2);
});

Deno.test("stack can follows first in, last out", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  assertEquals(s.pop(), 3);
  assertEquals(s.pop(), 2);
  assertEquals(s.pop(), 1);
});

Deno.test("peek returns the first element but doesnt pop it", () => {
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.push(3);
  assertEquals(s.peek(), 3);
  assertEquals(s.pop(), 3);
  assertEquals(s.peek(), 2);
  assertEquals(s.pop(), 2);
  assertEquals(s.peek(), 1);
  assertEquals(s.pop(), 1);
});
