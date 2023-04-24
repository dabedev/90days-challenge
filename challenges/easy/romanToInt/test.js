const { deepStrictEqual } = require('node:assert');
const { describe, it } = require('node:test')
const romanToInt = require('./romanToInt.js');

describe('Roman numbers to Integers', () => {
    it('Should convert Roman numeral "III" to the integer 3', () => {
        const romanNumeral = "III";
        const expectedOutput = 3;
        deepStrictEqual(romanToInt(romanNumeral), expectedOutput);
    });

    it('Should convert Roman numeral "LVIII" to the integer 58', () => {
        const romanNumeral = "LVIII";
        const expectedOutput = 58;
        deepStrictEqual(romanToInt(romanNumeral), expectedOutput);
    });

    it('Should convert Roman numeral "MCMXCIV" to the integer 1994', () => {
        const str = "MCMXCIV";
        const expectedOutput = 1994;
        deepStrictEqual(romanToInt(str), expectedOutput);
    });
});