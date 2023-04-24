// Timer: 03:24:00
// Challenge: https://leetcode.com/problems/two-sum/
// Runtime: 73ms
// Memory: 42.9MB
// Note: N/A

const twoSum = function (nums, target) {
    var hash = {};
    for (let i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (hash[complement] != undefined) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return null;
};

module.exports = twoSum;