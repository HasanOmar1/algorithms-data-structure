function stringSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("lorie loled", "lol")); // 1
console.log(stringSearch("sadbutsad", "sad")); // 2
