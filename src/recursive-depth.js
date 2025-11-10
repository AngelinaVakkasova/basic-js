const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
      if (!Array.isArray(arr)) return 0;
      if (arr.length === 0) return 1;

      let maxDepth = 0;
      for (const el of arr) {
          if (Array.isArray(el)) {
              maxDepth = Math.max(maxDepth, this.calculateDepth(el));
          }
      }

      return maxDepth + 1;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
