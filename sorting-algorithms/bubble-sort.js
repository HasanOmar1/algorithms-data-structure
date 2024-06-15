function badBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // or

        // let swap = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

// console.log(badBubbleSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // or

        // let swap = arr[j]
        // arr[j] = arr[j + 1];
        // arr[j + 1] = swap;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]

// if no swap then break out of the loop
// O(n)
function optimizedBubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(optimizedBubbleSort([8, 1, 2, 3, 4, 5])); // [1,2,3,4,5,8]

// Time Complexity

// best-case : O(n)
// average-case : O(n^2)
// Worst-case : O(n^2)
