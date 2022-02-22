import { midpoint } from "./index.ts";
import { LinkedList } from "./linkedlist.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Midpoint returns the middle node of an odd numbered list when the list has 3 elements", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  assertEquals(midpoint(l)?.data, 2);
});

Deno.test("Midpoint returns the middle node of an odd numbered list when the list has 5 elements", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  l.insertLast(5);
  assertEquals(midpoint(l)?.data, 3);
});

Deno.test("Midpoint returns the middle node of an even numbered list when the list has 2 elements", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  assertEquals(midpoint(l)?.data, 1);
});

Deno.test("Midpoint returns the middle node of an even numbered list when the list has 4 elements", () => {
  const l = new LinkedList();
  l.insertLast(1);
  l.insertLast(2);
  l.insertLast(3);
  l.insertLast(4);
  assertEquals(midpoint(l)?.data, 2);
});
