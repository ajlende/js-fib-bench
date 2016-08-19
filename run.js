var Benchmark = require('benchmark')
var suite = new Benchmark.Suite('Fibonacci')

var iterative = require('./fibonacci/iterative')
var recursive = require('./fibonacci/recursive')
var tailcall = require('./fibonacci/tailcall')
var memoized = require('./fibonacci/memoized')
var composed = require('./fibonacci/composed')

var fibNum = process.argv[2] || 30 // argument for which fibonacci number to compute or default to 30

suite

// Tests
.add('iterative', function() {
  iterative(fibNum)
})

.add('recursive', function() {
  recursive(fibNum)
})

.add('tailcall', function() {
  tailcall(fibNum)
})

.add('memoized', function() {
  memoized(fibNum)
})

.add('composed', function() {
  composed(fibNum)
})

// Listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})

.on('complete', function(event) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

// Run
.run()
