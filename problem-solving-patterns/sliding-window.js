// O(n^2)
function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// O(n)
function maxSubArraySum2(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function maxSubarraySumQ(arr, n) {
  if (arr.length < n) return null;

  let total = 0;

  for (let i = 0; i < n; i++) {
    total += arr[i];
  }

  let currentTotal = total;
  for (let i = n; i < arr.length; i++) {
    currentTotal = currentTotal - arr[i - n] + arr[i];
    total = Math.max(total, currentTotal);
  }

  return total;
}

// console.log(maxSubarraySumQ([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySumQ([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySumQ([2, 3], 3)); // null

function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 because [5,4] is the smallest subarray
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("thecatinthehat")); // 7
