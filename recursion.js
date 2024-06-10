function countDown(num) {
  if (num <= 0) {
    console.log(`All done`);
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// console.log(countDown(5));

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// 4 + 3 + 2 + 1 = 10
// console.log(sumRange(4));

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(4)); // 24

// with helper function
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

// pure recursion
function pureCollectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(pureCollectOddValues(arr.slice(1)));
  return newArr;
}

// console.log(pureCollectOddValues([1, 2, 3, 4, 5, 6]));

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// console.log(power(2, 4)); // 16

// product of array means the multiplication of numbers in array
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

// Write a function called recursiveRange which accepts a number and adds up all the numbers
// from 0 to the number passed to the function
function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(6)); //21

function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
