function isPalindrome(word) {
  let turnToArray = word.split("");
  let reverseArray = turnToArray.reverse();
  let reverse = reverseArray.join('');
  if (reverse === word) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome('arara'));

console.log(isPalindrome('desenvolvimento'));
