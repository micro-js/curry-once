/**
 * Modules
 */

var concat = require('@f/concat')

/**
 * Expose curry
 */

module.exports = curry

/**
 * Simple curry function, essentially a curried partial.
 * @param  {Function} fn
 * @return {Function}
 */

function curry (fn) {
  var self = this
  return function () {
    var args1 = []
    for (var i = 0; i < arguments.length; i++) {
      args1.push(arguments[i])
    }
    return function () {
      var args2 = []
      for (var i = 0; i < arguments.length; i++) {
        args2.push(arguments[i])
      }
      return fn.apply(self, concat(args1, args2))
    }
  }
}
