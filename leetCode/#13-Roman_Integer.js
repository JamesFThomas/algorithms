/*
                  ***** Roman to Integer *****

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

"MCMXCIV" MC = 1000 - 900, MX = 1000-10,  CI = 100+1 V =

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3

Example 2:
Input: s = "IV"
Output: 4

Example 3:
Input: s = "IX"
Output: 9

Example 4:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 5:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

const romanToInt2 = (romNum) => {
  // create variable to hold sum of romNom
  let count = 0;
  let i = 0;
  //loop through input number, evaluate each char at string index
  while (i < romNum.length) {
    let current = romNum[i];
    let next = romNum[i + 1];
    console.log(count, current);
    // if I
    if (current === 'I') {
      if (next === 'V') {
        count += 4;
        i += 2;
      } else if (next === 'X') {
        count += 9;
        i += 2;
      } else {
        count += 1;
        i++;
      }
    }
    // if V
    else if (current === 'V') {
      count += 5;
      i++;
    }
    // if X
    else if (current === 'X') {
      if (next === 'L') {
        count += 40;
        i += 2;
      } else if (next === 'C') {
        count += 90;
        i += 2;
      } else {
        count += 10;
        i++;
      }
    }
    // if L
    else if (current === 'L') {
      count += 50;
      i++;
    }
    // if C
    else if (current === 'C') {
      if (next === 'D') {
        count += 400;
        i += 2;
      } else if (next === 'M') {
        count += 900;
        i += 2;
      } else {
        count += 100;
        i++;
      }
    }
    // if D
    else if (current === 'D') {
      count += 500;
      i++;
    }
    // M
    else if (current === 'M') {
      count += 1000;
      i++;
    }
  }

  //return count variable
  return count;
};

/*  subtraction conditions
  I can be placed before V (5) and X (10) to make 4 and 9.
  X can be placed before L (50) and C (100) to make 40 and 90.
  C can be placed before D (500) and M (1000) to make 400 and 900.
*/

/*
  Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
  */

// iterate through input string 2 indexes at a time
//evaluate each pair with switch statement and add or subtract certain value based on 6 subtraction conditions
// return count variable
