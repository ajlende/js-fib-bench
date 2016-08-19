function fib(num) {
  let current = 0
  let next = 1

  for (let i = 0; i < num; i++) {
    [current, next] = [next, current + next]
  }

  return current
}

module.exports = fib
