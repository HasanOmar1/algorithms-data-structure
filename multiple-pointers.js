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

// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([])); // 0

function areThereDuplicates(...n) {
  n.sort((a, b) => {
    if (a < b) return -1;
    if (b > a) return 1;
  });

  let start = 0;
  let next = 1;
  while (next < n.length) {
    if (n[start] === n[next]) {
      return true;
    }
    next++;
    start++;
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3 , 21)); // false
// console.log(areThereDuplicates(1, 2, 2)); //true
// console.log(areThereDuplicates(`a`, "b", "c", "a")); //true

function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let newAvg = (arr[start] + arr[end]) / 2;

    if (newAvg === avg) {
      return true;
    } else if (newAvg > avg) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([], 4)); // false

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

// console.log(isSubsequence2("hello", "hello world")); // true
// console.log(isSubsequence2("sing", "sting")); //true
// console.log(isSubsequence2("abc", "acb")); // false (order matters)
