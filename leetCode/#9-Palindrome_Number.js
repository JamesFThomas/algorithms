/*
                          LeetCode #9
                        Palindrome Number


  Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

  Bonus: Try to solve without converting the integer to a string?

  Example 1:
  Input: x = 121
  Output: true

  Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

  Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

  Example 4:
  Input: x = -101
  Output: false


  Constraints:

    -231 <= x <= 231 - 1

 */

const isPalindrome = (num) => {
  // check to see if input is negative
  //return false if input number negative
  if (num < 0) {
    return false;
  }

  //change number to string for iteration of values
  let numString = num.toString();

  // create local variables for two pointers
  let left = 0;
  let right = numString.length - 1;
  let isSame = true;

  // iterate over
  while (left < right) {
    if (numString[left] !== numString[right]) {
      isSame = false;
      return isSame;
    }
    left++;
    right--;
  }

  return isSame;
};

// Runtime: 292 ms, faster than 9.07% of JavaScript online submissions for Palindrome Number.

// Memory Usage: 49.6 MB, less than 11.77% of JavaScript online submissions for Palindrome Number.
