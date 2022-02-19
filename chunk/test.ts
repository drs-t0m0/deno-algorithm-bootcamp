import { arrayChunk } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("chunk divides an array of 10 elements with chunk size 2", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = arrayChunk(arr, 2);

  assertEquals(chunked, [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

Deno.test("chunk divides an array of 3 elements with chunk size 1", () => {
  const arr = [1, 2, 3];
  const chunked = arrayChunk(arr, 1);

  assertEquals(chunked, [[1], [2], [3]]);
});

Deno.test("chunk divides an array of 5 elements with chunk size 3", () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = arrayChunk(arr, 3);

  assertEquals(chunked, [[1, 2, 3], [4, 5]]);
});

Deno.test("chunk divides an array of 13 elements with chunk size 5", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = arrayChunk(arr, 5);

  assertEquals(chunked, [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});
