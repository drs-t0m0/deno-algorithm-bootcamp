import { bubbleSort, merge, mergeSort, selectionSort } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

const getArray = (): number[] => [100, -40, 500, -124, 0, 21, 7];

const getSortedArray = (): number[] => [-124, -40, 0, 7, 21, 100, 500];

Deno.test("Bubble sort sorts an array", () => {
  assertEquals(bubbleSort(getArray()), getSortedArray());
});

Deno.test("Selection sort sorts an array", () => {
  assertEquals(selectionSort(getArray()), getSortedArray());
});

Deno.test("Merge sort merge function can join together two sorted arrays", () => {
  const left = [1, 10];
  const right = [2, 8, 12];

  assertEquals(merge(left, right), [1, 2, 8, 10, 12]);
});

Deno.test("Merge sort sorts an array", () => {
  assertEquals(mergeSort(getArray()), getSortedArray());
});
