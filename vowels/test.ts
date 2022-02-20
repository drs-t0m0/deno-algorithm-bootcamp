import { vowels } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("returns the number of vowels used", () => {
  assertEquals(vowels("aeiou"), 5);
});

Deno.test("returns the number of vowels used", () => {
  assertEquals(vowels("abcdefghijklmnopqrstuvwxyz"), 5);
});

Deno.test("returns the number of vowels used", () => {
  assertEquals(vowels("bcdfghjkl"), 0);
});
