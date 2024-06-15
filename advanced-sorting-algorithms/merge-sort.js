// this works while arr1 and arr2 are sorted arrays.
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1,2,10,14,50,99,100]

// sorts array
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
// console.log(mergeSort([1, 10, 50, 2, 14, 99, 100])); // [1,2,10,14,50,99,100]
// console.log(mergeSort([15, 2, 13, 91, 28, 100, 8])); // [2,8,13,15,28,91,100]

// Time Complexity: O(n log n)
// Space Complexity: O(n)
