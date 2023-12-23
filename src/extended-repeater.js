const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  let result = str;

  if (repeatTimes) {
    if (separator) {
      for (let i = 1; i < repeatTimes; i++) {
        result += separator + str;
      }
    } else {
      for (let i = 1; i < repeatTimes; i++) {
        result += '+' + str;
      }
    }
  } else {
    result += addition;
  }

  if (addition) {
    for (let j = 1; j < additionRepeatTimes; j++) {
      result += additionSeparator + addition;
    }
  }

  return result;
}

module.exports = {
  repeater
};
