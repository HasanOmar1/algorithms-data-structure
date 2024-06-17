function insertionSort(arr, compare = (a, b) => a - b) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;

    for (j = i - 1; j >= 0 && compare(currentVal, arr[j]) < 0; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}
