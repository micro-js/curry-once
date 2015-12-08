/**
 * Modules
 */

var slice = require('@micro-js/slice')

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
  var self = this
  return function () {
    var args1 = slice(arguments)
    return function () {
      return fn.apply(self, args1.concat(slice(arguments)))
    }
  }
}
