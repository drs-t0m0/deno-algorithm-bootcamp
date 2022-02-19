// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

export const maxChar = (str: string): string => {
  const charMap: { [key: string]: number } = {};

  for (const char of str) {
    if (charMap[char]) charMap[char]++;
    else charMap[char] = 1;
  }

  let max = 0;
  let maxChar = "";
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
