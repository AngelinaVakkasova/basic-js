const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const digits = n.toString().split('');
    let max = 0;
    for (let i = 0; i < digits.length; i++) {
        const num = parseInt(digits.slice(0, i).concat(digits.slice(i + 1)).join(''));
        if (num > max) {
            max = num;
        }
    }
    return max;
}

module.exports = {
  deleteDigit
};
