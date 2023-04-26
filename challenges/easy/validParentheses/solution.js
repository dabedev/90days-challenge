// Timer: 04:32:00
// Challenge: https://leetcode.com/problems/valid-parentheses/
// Runtime: 58ms
// Memory: 41.9MB
// Note: N/A

const hash = {
    ")": "(",
    "]": "[",
    "}": "{"
}

var isValid = function (s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            if (stack.length == 0 || stack.pop() != hash[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length == 0;
};

module.exports = isValid;