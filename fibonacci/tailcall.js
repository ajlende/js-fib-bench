function fibTail(num, a, b) {
  if (num === 0)
    return b
  else
    return fibTail(num - 1, a + b, a)
}

function fib(num) {
  return fibTail(num, 1, 0)
}

module.exports = fib
