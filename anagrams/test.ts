import { anagrams } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.126.0/testing/asserts.ts";

Deno.test("'hello' is an anagram of 'llohe'", () => {
  assertEquals(anagrams("hello", "llohe"), true);
});

Deno.test("'Whoa! Hi!' is an anagram of 'Hi! Whoa!'", () => {
  assertEquals(anagrams("Whoa! Hi!", "Hi! Whoa!"), true);
});

Deno.test("'One One' is not an anagram of 'Two two two", () => {
  assertEquals(anagrams("One One", "Two two two"), false);
});

Deno.test("'One one' is not an anagram of 'One one c", () => {
  assertEquals(anagrams("One one", "One one c"), false);
});

Deno.test("'A tree, a life, a bench' is not an anagram of 'A tree, a fence, a yard", () => {
  assertEquals(
    anagrams("A tree, a life, a bench", "A tree, a fence, a yard"),
    false,
  );
});
