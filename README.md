# JS Fibonacci Benchmarks

Just some comparisons of various programming techniques for computing the nth Fibonacci number

Requires node.js >= v7.0.0 since that is the latest version that supports tail-call optimization

Versions less than that will still run; however, the V8 engine won't optimize the tail-calls and you probably won't see an improvement for the `tailcall` approach.

# Running
1. (Optional) Install node.js >= v7.0.0 (At the time of this writing is a nightly build. The one that I used was `v7.0.0-nightly201608173177b99737`. It can be installed with [nvm](https://github.com/creationix/nvm) with `NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm install v7.0.0-nightly201608173177b99737`)
2. `npm install`
3. (Optional) `npm test` to confirm that all fibs work
4. `npm start` OR `node --harmony run.js [FIB_NUMBER]`

# Implementations
- `iterative`: An iterative approach that you probably learned in class
- `iterativees6`: An iterative approach with an in-place swap using ES6 array destructuring assignment
- `recursive`: The naive approach that y'all used to learn recursion
- `tailcall`: A version that you may have seen in a functional programming class
- `memoized`: The first dynamic programming algorithm you probably studied
- `composed`: A simple memoization wrapper that wraps the naive recursive approach

# Results
These are the results from my Mid-2012 Macbook Pro

```
$ node --harmony run.js 32
iterative x 726,578 ops/sec ±0.86% (85 runs sampled)
iterativees6 x 108,391 ops/sec ±1.03% (85 runs sampled)
recursive x 4.71 ops/sec ±6.55% (16 runs sampled)
tailcall x 951,489 ops/sec ±1.02% (85 runs sampled)
memoized x 481,473 ops/sec ±1.10% (85 runs sampled)
composed x 1,001,001 ops/sec ±1.30% (84 runs sampled)
Fastest is composed
```

I was kind of surprised that `composed` and `tailcall` were actually fastest. My expectation was that the `iterative` or `iterativees6` approach would still be fastest.
