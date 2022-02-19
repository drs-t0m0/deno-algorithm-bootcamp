import { steps } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("steps called with n = 1", () => {
  assertEquals(steps(1), ["#"]);
});

Deno.test("steps called with n = 2", () => {
  assertEquals(steps(2), ["# ", "##"]);
});

Deno.test("steps called with n = 3", () => {
  assertEquals(steps(3), ["#  ", "## ", "###"]);
});
