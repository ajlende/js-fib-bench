function fib(num) {
  if (num > 75) throw new RangeError('Floating point precision is only precise enough to compute up to the 75th Fibonacci number')
  return Math.round(
    (1 / Math.sqrt(5)) *
    (
      Math.pow(((1 + Math.sqrt(5)) / 2), num) -
      Math.pow(((1 - Math.sqrt(5)) / 2), num)
    )
  )
}

module.exports = fib
