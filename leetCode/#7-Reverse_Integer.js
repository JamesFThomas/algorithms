/*
                                                                      LeetCode #7
                                                                    REVERSE INTERGER

Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Example 4:
Input: x = 0
Output: 0


Constraints:
-231 <= x <= 231 - 1

 */

const reversed = (num) => {
  //check if number is 0
  if (num === 0) {
    // if zero return 0
    return 0;
  } else {
    // if input not zero break number into array values
    let numbers = num.toString().split('');

    //check first index
    if (numbers[0] === '-') {
      // remove negative sign from front
      numbers.shift();

      // reverse, change sign, change back to number
      numbers = Number(numbers.reverse().join('')) * -1;

      // check if reversed number is in interger range
      return numbers <= -2147483648 ? 0 : numbers;
    } else {
      // reverse, change back to number
      numbers = Number(num.toString().split('').reverse().join(''));

      // check if reversed number is in interger range
      return numbers >= 2147483648 ? 0 : numbers;
    }
  }
};
