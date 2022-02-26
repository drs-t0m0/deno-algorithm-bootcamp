// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
};

export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

export const merge = (left: number[], right: number[]): number[] => {
  const results: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const l = left.shift();
      if (l !== undefined) results.push(l);
    } else {
      const r = right.shift();
      if (r !== undefined) results.push(r);
    }
  }

  return [...results, ...left, ...right];
};
