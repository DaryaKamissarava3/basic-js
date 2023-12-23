const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedWithout1 = arr.reduce((acc, num) => {
    if (num !== -1) {
      acc.push(num);
    }
    return acc;
  }, []).sort((a, b) => a - b);

  return arr.map(num =>
    (num === -1 ? num : sortedWithout1.shift())
  );
}

module.exports = {
  sortByHeight
};
