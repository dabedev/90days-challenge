const { deepStrictEqual } = require('node:assert');
const { describe, it } = require('node:test')
const isValid = require('./solution.js');

describe('Validate Parentheses', () => {
    it('Should return true for valid parentheses', () => {
        const input = "()[]{}";
        const expectedOutput = true;
        deepStrictEqual(isValid(input), expectedOutput);
    });

    it('Should return false for invalid parentheses', () => {
        const input = "(]";
        const expectedOutput = false;
        deepStrictEqual(isValid(input), expectedOutput);
    });

    it('Should handle nested parentheses', () => {
        const input = "{[]}";
        const expectedOutput = true;
        deepStrictEqual(isValid(input), expectedOutput);
    });

    it('Should handle parentheses with other characters', () => {
        const input = "([]){}";
        const expectedOutput = true;
        deepStrictEqual(isValid(input), expectedOutput);
    });

    it('Should handle single parentheses', () => {
        const input = ")";
        const expectedOutput = false;
        deepStrictEqual(isValid(input), expectedOutput);
    });

    it('Should handle empty input', () => {
        const input = "";
        const expectedOutput = true;
        deepStrictEqual(isValid(input), expectedOutput);
    });
});