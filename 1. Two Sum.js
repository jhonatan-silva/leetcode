/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    const value1 = nums[i]
    const value2 = target - value1
    const position2 = nums.indexOf(value2)

    if ((position2 > -1) && i !== position2) {
      return [i, position2]
    }
  }

  return []
};

// Testcase
const nums = [2,7,11,15]
const target = 9
console.log(twoSum(nums, target))