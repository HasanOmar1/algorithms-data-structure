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
  // let sum = 0;

  // function helper(innerObj) {
  //   for (let key in innerObj) {
  //     if (typeof innerObj[key] === "object" && innerObj[key] !== null) {
  //       helper(innerObj[key]);
  //     } else if (typeof innerObj[key] === "number" && innerObj[key] % 2 === 0) {
  //       sum += innerObj[key];
  //     }
  //   }
  // }
  // helper(obj);
  // return sum;

  // or

  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

// let obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// let obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

//  ---------------------------------------------------------------

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  let cap = arr[0].toUpperCase();
  return [cap, ...capitalizeWords(arr.slice(1))];
}

// let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

//  ---------------------------------------------------------------

// Write a function called stringifyNumbers which takes in an object
// and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
// The exercise intends for you to create a new object with the numbers converted to strings,
// and not modify the original. Keep the original object unchanged.
function stringifyNumbers(obj) {
  // let newObj = {};

  // function helper(innerObj, targetObj) {
  //   for (let key in innerObj) {
  //     if (
  //       typeof innerObj[key] === "object" &&
  //       innerObj[key] !== null &&
  //       !Array.isArray(innerObj[key])
  //     ) {
  //       targetObj[key] = {};
  //       helper(innerObj[key], targetObj[key]);
  //     } else if (typeof innerObj[key] === "number") {
  //       targetObj[key] = innerObj[key].toString();
  //     } else {
  //       targetObj[key] = innerObj[key];
  //     }
  //   }
  // }
  // helper(obj, newObj);
  // return newObj;

  // or

  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

// --------------------------------------------------------

// Write a function called collectStrings which accepts an object
// and returns an array of all the values in the object that have a typeof string
function collectStrings(obj) {
  // const arr = [];

  // function helper(obj) {
  //   for (let key in obj) {
  //     if (typeof obj[key] === "object" && obj[key] !== null) {
  //       helper(obj[key]);
  //     } else if (typeof obj[key] === "string") {
  //       arr.push(obj[key]);
  //     }
  //   }
  // }
  // helper(obj);
  // return arr;

  // or

  // pure recursion version
  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = [...arr, ...collectStrings(obj[key])];
    }
  }

  return arr;
}

// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"]))
