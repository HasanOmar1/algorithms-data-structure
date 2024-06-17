function bubbleSort(arr, compare = (a, b) => a - b) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
