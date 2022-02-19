import { fizzbuzz } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Calling fizzbuzz with 15 prints out the correct values", () => {
  assertEquals(fizzbuzz(1), 1);
  assertEquals(fizzbuzz(2), 2);
  assertEquals(fizzbuzz(3), "fizz");
  assertEquals(fizzbuzz(4), 4);
  assertEquals(fizzbuzz(5), "buzz");
  assertEquals(fizzbuzz(6), "fizz");
  assertEquals(fizzbuzz(7), 7);
  assertEquals(fizzbuzz(8), 8);
  assertEquals(fizzbuzz(9), "fizz");
  assertEquals(fizzbuzz(10), "buzz");
  assertEquals(fizzbuzz(11), 11);
  assertEquals(fizzbuzz(12), "fizz");
  assertEquals(fizzbuzz(13), 13);
  assertEquals(fizzbuzz(14), 14);
  assertEquals(fizzbuzz(15), "fizzbuzz");
});
