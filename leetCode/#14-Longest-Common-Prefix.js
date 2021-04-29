/*

                        Leetcode #14
                    Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/

/*
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  // handle base case of empty input array
  if (!strs.length) {
    return '';
  }

  // create variable prefix variable
  let prefix = '';

  // create nested loop to compare first chars of each string
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      // if 0 index values do NOT match return emtpy string variable
      if (strs[0][i] !== strs[j][i]) {
        return prefix;
      }
    }
    // if 0 index of each string matches add to empty string
    prefix += strs[0][i];
  }

  // return empty string if prefix not found
  return prefix;
};
