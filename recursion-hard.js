// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

// -----------------------------------------------------------------------------

// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("tacocat")); // true

// -----------------------------------------------------------------------------

// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

function isOdd(n) {
  return n % 2 !== 0;
}

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false

// -----------------------------------------------------------------------------

// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.
function flatten1(arr) {
  if (arr.length === 0) return [];

  if (Array.isArray(arr[0])) {
    return flatten1(arr[0]).concat(flatten1(arr.slice(1)));
  }

  return [arr[0]].concat(flatten1(arr.slice(1)));
}

//  or

function flatten2(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten2(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// console.log(flatten1([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten2([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]

// -----------------------------------------------------------------------------

// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  const capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// -----------------------------------------------------------------------------

// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      sum += obj[key];
    }
  }
  return sum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};
console.log(nestedEvenSum(obj1)); // 6

// let obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj2)); // 10
