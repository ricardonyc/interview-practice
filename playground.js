function solution(s) {
  if (s.length === 0) return "";

  const prefixes = [];

  for (let i = 0; i < s.length; i++) {
    if (palindrome(s.slice(0, i + 1))) {
      prefixes.push(s.slice(0, i + 1));
    }
  }

  let longestPrefix = 0;
  for (const el of prefixes) {
    if (el.length > longestPrefix) {
      longestPrefix = el.length;
    }
  }

  const newString = s.slice(longestPrefix);

  if (newString < 2){
    return newString
  } else

  return newString;

  // LOOP THROUGH STRING
  // GRAB THE FIRST PREFIX
  // IF PREFIX IS INDEED A PALINDROME, THEN WE CONTINUE TO LOOP TO THE NEXT PREFIX
  // IF THE PREFIX IS NOT A PALINDROME ANYMORE, THEN WE CHECK FOR THE LONGEST PREFIX OF THEM ALL
  // WE THEN CUT THE LONGEST PREFIX OUT OF THE ORIGINAL STRING
  // THEN WE CONTINUE WITH WHATS REMAINING
}

function palindrome(string) {
  return string.split("").reverse().join("") === string ? true : false;
}

console.log(solution("aaacodedoc"));



// You are given a string s. Consider the following algorithm applied to this string:

// Take all the prefixes of the string, and choose the longest palindrome between them.
// If this chosen prefix contains at least two characters, cut this prefix from s and go back to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
// Your task is to implement the above algorithm and return its result when applied to string s.

// Note: you can click on the prefixes and palindrome words to see the definition of the terms if you're not familiar with them.

// Example

// For s = "aaacodedoc", the output should be solution(s) = "".

// The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes - "a", "aa", "aaa". The longest one between them is "aaa", so we cut if from s.
// Now we have string "codedoc". It contains two prefixes which are also palindromes - "c" and "codedoc". The longest one between them is "codedoc", so we cut if from the current string and obtain the empty string.
// Finally the algorithm ends on the empty string, so the answer is "".
// For s = "codesignal", the output should be solution(s) = "codesignal".
// The initial string s = "codesignal" contains the only prefix, which is also palindrome - "c". This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string "codesignal" as a result.

// For s = "", the output should be solution(s) = "".