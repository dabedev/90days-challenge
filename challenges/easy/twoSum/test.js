const { deepStrictEqual } = require('node:assert');
const { describe, it } = require('node:test')
const twoSum = require('./solution.js');

describe('Two Sum', () => {
    it('Should return an array of the correct indices', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expectedOutput = [0, 1];
        deepStrictEqual(twoSum(nums, target), expectedOutput);
    });

    it('Should handle duplicate values in the input array', () => {
        const nums = [3, 3];
        const target = 6;
        const expectedOutput = [0, 1];
        deepStrictEqual(twoSum(nums, target), expectedOutput);
    });

    it('Should handle negative numbers in the input array', () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const expectedOutput = [2, 4];
        deepStrictEqual(twoSum(nums, target), expectedOutput);
    });
});