const palindromes = function (word) {
  let wordArray = word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  let wordArrayReverse = wordArray.slice().reverse();
  let wordArrayLength = wordArray.length;
  let isPalindrome = true;

  for (let i = 0; i < wordArrayLength; i++) {
    if (wordArray[i] !== wordArrayReverse[i]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
