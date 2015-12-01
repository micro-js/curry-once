/**
 * Modules
 */

var toArray = require('@micro-js/to-array')

/**
 * Expose curry
 */

module.exports = curry['default'] = curry

/**
 * Simple curry function, essentially a curried partial.
 * @param  {Function} fn
 * @return {Function}
 */

function curry (fn) {
  return function () {
    var args1 = toArray(arguments)
    return function () {
      return fn.apply(null, args1.concat(toArray(arguments)))
    }
  }
}
