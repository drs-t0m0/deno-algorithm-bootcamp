// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

import { Node } from "./node.ts";

export const levelwidth = (root: Node): number[] => {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else if (node && node instanceof Node) {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
};
