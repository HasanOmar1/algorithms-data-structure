//helper functions
function getDigit(num, place) {
  //   num = Math.abs(num);
  //   let numString = num.toString().split("").reverse().join("");
  //   for (let i = 0; i < numString.length; i++) {
  //     return numString[place] ? +numString[place] : 0;
  //   }

  // or

  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// from right to left
// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(-12345, 5)); // 0

function digitCount(num) {
  num = Math.abs(num);
  return num.toString().length;
}

function mostDigits(arr) {
  //   arr = arr.map((n) => Math.abs(n));
  //   return digitCount(Math.max(...arr));

  // or

  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1234, 56, 7, -12345])); // 5

function radixSort(arr) {
  let maxDigitsCount = mostDigits(arr);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([15, 100, 3, 9, 1234]));
