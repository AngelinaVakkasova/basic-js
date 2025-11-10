const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum = 0;
    if (!Array.isArray(matrix) || matrix.length === 0) return sum;

    const cols = matrix[0].length;
    const skip = new Array(cols).fill(false);

    for (let row of matrix) {
        for (let c = 0; c < cols; c++) {
            if (!skip[c]) {
                if (row[c] === 0) {
                    skip[c] = true;
                } else {
                    sum += row[c];
                }
            }
        }
    }

    return sum;
}

module.exports = {
  getMatrixElementsSum
};
