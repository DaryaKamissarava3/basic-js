const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }

  let result = {};

  for (let domain of domains) {
    const domainParts = domain.split('.').reverse();

    let newObjKey = '';

    for (let domainPart of domainParts) {
      newObjKey += `.${domainPart}`;
      result[newObjKey] = (result[newObjKey] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
