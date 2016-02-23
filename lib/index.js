/**
 * Modules
 */

var slice = require('@f/slice')
var concat = require('@f/concat')

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
    var args = slice(arguments)
    return function () {
      return fn.apply(self, concat(args, slice(arguments)))
    }
  }
}
