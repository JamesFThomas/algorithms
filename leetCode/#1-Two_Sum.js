/*
                            LeetCode #1
                              Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

var twoSum = function(nums, target) {

  //array lit to hold number indexes when found
  let indexes = [];

  //boolean flag to indicate if values have been found
  let notFound = false;


  // Create nested loops to evaluate sum of each combination of values in nums array
  for(var i = 0; i < nums.length; i++){

    for(var j = 1; j < nums.length; j++){
      
      // evaluate sum of each pair of value, and current indexes
      if(nums[i] + nums[j] === target && i !== j){

        // if values sum === target, push index of current values to indexes array
        indexes[0] = i;
        indexes[1] = j;

        // flip boolean flag to true
        notFound = true;

        //return indexes array
        return indexes;

      }

      // evaluate boolean flag
      if (!notFound){

        //if boolean flag still false continue evaluating sums
        continue;

      }

            } //inner for loop end

      } //outter for loop end


};