import { reverseInt } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("ReverseInt handles 0 as an input", () => {
  assertEquals(reverseInt(0), 0);
});

Deno.test("ReverseInt flips a positive number", () => {
  assertEquals(reverseInt(5), 5);
  assertEquals(reverseInt(15), 51);
  assertEquals(reverseInt(90), 9);
  assertEquals(reverseInt(2359), 9532);
});

Deno.test("ReverseInt flips a negative number", () => {
  assertEquals(reverseInt(-5), -5);
  assertEquals(reverseInt(-15), -51);
  assertEquals(reverseInt(-90), -9);
  assertEquals(reverseInt(-2359), -9532);
});
