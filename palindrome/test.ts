import { palindrome } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("'aba' is a palindrome", () => {
  assertEquals(palindrome("aba"), true);
});

Deno.test("' aba' is not a palindrome", () => {
  assertEquals(palindrome(" aba"), false);
});

Deno.test("'aba ' is not a palindrome", () => {
  assertEquals(palindrome("aba "), false);
});

Deno.test("'greetings' is not a palindrome", () => {
  assertEquals(palindrome("greetings"), false);
});

Deno.test("'1000000001' is a palindrome", () => {
  assertEquals(palindrome("1000000001"), true);
});

Deno.test("'Fish hsif' is not a palindrome", () => {
  assertEquals(palindrome("Fish hsif"), false);
});

Deno.test("'pennep' is a palindrome", () => {
  assertEquals(palindrome("pennep"), true);
});
