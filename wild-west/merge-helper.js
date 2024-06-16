function merge(arr1, arr2, compare = (a, b) => a - b) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (compare(arr1[i], arr2[j]) < 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// let arr1 = [1, 3, 4, 5];
// let arr2 = [2, 4, 6, 8];
// // console.log(merge(arr1,arr2)) // [1,2,3,4,4,5,6,8]

// let names = ["Bob", "Ethel", "Christine"];
// let otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }
// console.log(merge(names, otherNames, stringLengthComparator));
// // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
