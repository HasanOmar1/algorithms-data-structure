// O(N)
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
// console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3

// O(log n)
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < num) {
      start = mid + 1;
    } else if (arr[mid] > num) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); // 3
