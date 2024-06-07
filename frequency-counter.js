// O(n^2)
function freq(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(freq([1, 2, 3], [4, 9, 1]));
// console.log(freq([4, 5], [25, 16]));

// O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let value of arr1) {
    freqCounter1[value] = (freqCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    freqCounter2[value] = (freqCounter2[value] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }

    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 9, 1]));
// console.log(same([4, 5], [25, 16]));

// anagram is a word/phrase/name formed by rearranging the letters of another
// determine if str2 is an anagram of str1
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let word of str1) {
    freqCounter1[word] = (freqCounter1[word] || 0) + 1;
  }

  for (let word of str2) {
    freqCounter2[word] = (freqCounter2[word] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("", "")); //true
// console.log(validAnagram("aaz", "zza")); //false
// console.log(validAnagram("cinema", "iceman")); //true
// console.log(validAnagram("texttwisttime", "timetwisttext")); //true

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (!counter[char]) {
      return false;
    } else {
      counter[char] -= 1;
    }
  }

  return true;
}

// console.log(validAnagram2("aaz", "zza")); //false
// console.log(validAnagram2("cinema", "iceman")); //true
