function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      //   [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  swap(arr, start, swapIndex);
  //   [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// Time Complexity

// Best : O(n log n)
// Average : O(n log n)
// Worst : O(n^2)

// Space Complexity : O(log n)
