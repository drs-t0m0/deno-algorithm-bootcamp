import { reverse } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("Reverse reverses a string", () => {
  assertEquals(reverse("abcd"), "dcba");
});

Deno.test("Reverse reverses a string", () => {
  assertEquals(reverse("  abcd"), "dcba  ");
});
