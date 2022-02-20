import { matrix } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("matrix produces a 2x2 array", () => {
  const m = matrix(2);
  assertEquals(m.length, 2);
  assertEquals(m[0], [1, 2]);
  assertEquals(m[1], [4, 3]);
});

Deno.test("matrix produces a 3x3 array", () => {
  const m = matrix(3);
  assertEquals(m.length, 3);
  assertEquals(m[0], [1, 2, 3]);
  assertEquals(m[1], [8, 9, 4]);
  assertEquals(m[2], [7, 6, 5]);
});

Deno.test("matrix produces a 4x4 array", () => {
  const m = matrix(4);
  assertEquals(m.length, 4);
  assertEquals(m[0], [1, 2, 3, 4]);
  assertEquals(m[1], [12, 13, 14, 5]);
  assertEquals(m[2], [11, 16, 15, 6]);
  assertEquals(m[3], [10, 9, 8, 7]);
});
