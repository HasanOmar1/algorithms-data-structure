// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome("awesome")); // false
// console.log(isPalindrome("radar")); // true
// console.log(isPalindrome("tacocat")); // true
