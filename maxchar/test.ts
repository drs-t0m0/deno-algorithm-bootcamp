import { maxChar } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Finds the most frequently used char", () => {
  assertEquals(maxChar("aba"), "a");
  assertEquals(maxChar("abcdefghijklmnaaaaa"), "a");
});

Deno.test("Works with numbers in the string", () => {
  assertEquals(maxChar("ab1c1d1e1f1g1"), "1");
});
