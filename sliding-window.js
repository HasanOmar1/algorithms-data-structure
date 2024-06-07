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

console.log(maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubArraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
