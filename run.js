var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Fibonacci')

var iterative = require('./fibonacci/iterative')
var iterativees6 = require('./fibonacci/iterativees6')
var recursive = require('./fibonacci/recursive')
var tailcall = require('./fibonacci/tailcall')
var memoized = require('./fibonacci/memoized')
var composed = require('./fibonacci/composed')
var closedform = require('./fibonacci/closedform')
var lookup = require('./fibonacci/lookup')

var fibNum = process.argv[2] || 30 // argument for which fibonacci number to compute or default to 30

suite

// Tests
.add('iterative', function() {
  iterative(fibNum)
})

.add('iterativees6', function() {
  iterativees6(fibNum)
})

.add('recursive', function() {
  recursive(fibNum)
})

.add('composed', function() {
  composed(fibNum)
})

.add('tailcall', function() {
  tailcall(fibNum)
})

.add('memoized', function() {
  memoized(fibNum)
})

.add('closedform', function() {
  closedform(fibNum)
})

.add('lookup', function() {
  lookup(fibNum)
})

// Listeners
.on('cycle', function(event) {
  console.log(String(event.target))
})

.on('complete', function(event) {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
})

// Run
.run()
