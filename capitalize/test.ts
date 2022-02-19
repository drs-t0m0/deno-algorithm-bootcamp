import { capitalize } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("capitalizes the first letter of every word in a sentence", () => {
  assertEquals(
    capitalize("hi there, how is it going?"),
    "Hi There, How Is It Going?",
  );
});

Deno.test("capitalizes the first letter", () => {
  assertEquals(
    capitalize("i love breakfast at bill miller bbq"),
    "I Love Breakfast At Bill Miller Bbq",
  );
});
