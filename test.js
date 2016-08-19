var _ = require('lodash')

var iterative = require('./fibonacci/iterative')
var recursive = require('./fibonacci/recursive')
var tailcall = require('./fibonacci/tailcall')
var memoized = require('./fibonacci/memoized')
var composed = require('./fibonacci/composed')

var fibs = {
  iterative,
  recursive,
  tailcall,
  memoized,
  composed,
}

var sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]

function test(fn, sequence) {
  return _.reduce(sequence, function(result, expected, index) {
    var actual = fn(index)
    return result && (actual === expected)
  }, true)
}

function run(fibs, sequence) {
  _.forIn(fibs, function(fib, name) {
    var result = test(fib, sequence)
    var icon = result ? '\x1b[32m\u2713\x1b[0m' : '\x1b[31m\u2717\x1b[0m'
    console.log(`${name}: ${icon}`)
  })
}

run(fibs, sequence)
