function fib(num) {
  var a = 0
  var b = 1
  var tmp = 1

  for (var i = 0; i < num; i++) {
    a = b
    b = tmp
    tmp = a + b
  }

  return a
}

module.exports = fib
