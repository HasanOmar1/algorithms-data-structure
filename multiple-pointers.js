// ONLY WORKS WITH SORTED ARRAY

// Time O(n^2)   Space - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time - O(n)   Space - O(1)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero2([-3, -2, -1, 0, 1, 2, 5])); // [-2,2]
// console.log(sumZero2([1, 2, 3])); // undefined

// O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  //   let i = 0;
  //   let j = 1;

  //   while (j < arr.length) {
  //     if (arr[j] === arr[i]) {
  //       j++;
  //     } else {
  //       i++;
  //       arr[i] = arr[j];
  //     }
  //   }

  // or

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([])); // 0
