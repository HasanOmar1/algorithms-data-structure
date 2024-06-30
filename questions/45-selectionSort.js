function selectionSort(arr, compare = (a, b) => a - b) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[j], arr[min]) < 0) {
        min = j;
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(selectionSort(kitties, strComp));
// ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
