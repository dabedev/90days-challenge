// Timer: 05:37:00
// Challenge: https://leetcode.com/problems/roman-to-integer/
// Runtime: 107ms
// Memory: 47.5MB
// Note: I decided to opt for an OOP solution for a better runtime performance.

const hash = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}


var romanToInt = function (s) {
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        var curNumber = hash[s[i]];
        var nextNumber = hash[s[i + 1]];
        if (curNumber < nextNumber) num -= curNumber;
        else num += curNumber;
    }
    return num;
};


module.exports = romanToInt;