// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// O(n)
// function countZeroes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// O(log n)
function countZeroes(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[end] === 1) return 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === 0) {
      if (mid === 0 || arr[mid - 1] === 1) {
        return arr.length - mid;
      } else {
        end = mid - 1;
      }
    } else {
      start = mid + 1;
    }
  }
  return 0;
}

// or

// function countZeroes(arr) {
//   let start = 0;
//   let end = arr.length;

//   // Edge case: if the entire array is 1s, return 0
//   if (arr[arr.length - 1] === 1) return 0;

//   // Binary search for the first occurrence of 0
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === 1) {
//       start = mid + 1; // Narrow down to the right half
//     } else {
//       end = mid; // Narrow down to the left half
//     }
//   }

//   // At this point, start should be at the first occurrence of 0
//   return arr.length - start;
// }

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0

//  -------------------------------------------------------------

function sortedFrequency(arr, num) {
  function findFirstOccurrence(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let firstOccurrence = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] < num) {
        start = mid + 1;
      } else if (arr[mid] > num) {
        end = mid - 1;
      } else {
        firstOccurrence = mid;
        end = mid - 1; // Continue searching to the left
      }
    }

    return firstOccurrence;
  }

  function findLastOccurrence(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let lastOccurrence = -1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] < num) {
        start = mid + 1;
      } else if (arr[mid] > num) {
        end = mid - 1;
      } else {
        lastOccurrence = mid;
        start = mid + 1; // Continue searching to the right
      }
    }

    return lastOccurrence;
  }

  let firstOccurrence = findFirstOccurrence(arr, num);
  let lastOccurrence = findLastOccurrence(arr, num);

  if (firstOccurrence === -1) {
    return -1;
  }

  return lastOccurrence - firstOccurrence + 1;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
