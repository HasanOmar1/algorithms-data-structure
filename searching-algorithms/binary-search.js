// only works with sorted array.
function binarySearch(sortedArr, value) {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (value === sortedArr[mid]) {
      return mid;
    } else if (value < sortedArr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 19], 7));
