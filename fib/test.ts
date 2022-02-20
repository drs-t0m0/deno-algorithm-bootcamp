import { fib } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("calculates correct fib value for 1", () => {
  assertEquals(fib(1), 1);
});

Deno.test("calculates correct fib value for 2", () => {
  assertEquals(fib(2), 1);
});

Deno.test("calculates correct fib value for 3", () => {
  assertEquals(fib(3), 2);
});

Deno.test("calculates correct fib value for 4", () => {
  assertEquals(fib(4), 3);
});

Deno.test("calculates correct fib value for 15", () => {
  assertEquals(fib(39), 63245986);
});
