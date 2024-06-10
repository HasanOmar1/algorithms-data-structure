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

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

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

console.log(pureCollectOddValues([1, 2, 3, 4, 5, 6]));
