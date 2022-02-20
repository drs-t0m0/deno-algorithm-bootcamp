import { pyramid } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("prints a pyramid for n = 2", () => {
  assertEquals(pyramid(2), [" # ", "###"]);
});

Deno.test("prints a pyramid for n = 3", () => {
  assertEquals(pyramid(3), ["  #  ", " ### ", "#####"]);
});

Deno.test("prints a pyramid for n = 4", () => {
  assertEquals(pyramid(4), ["   #   ", "  ###  ", " ##### ", "#######"]);
});
