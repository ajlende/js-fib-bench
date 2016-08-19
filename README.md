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
- `recursive`: The naive approach that y'all used to learn recursion
- `tailcall`: A version that you may have seen in a functional programming class
- `memoized`: The first dynamic programming algorithm you probably studied
- `composed`: A simple memoization wrapper that wraps the naive recursive approach

# Results
These are the results from my Mid-2012 Macbook Pro

```
$ node --harmony run.js 32
iterative x 731,907 ops/sec ±0.94% (86 runs sampled)
recursive x 4.63 ops/sec ±6.55% (16 runs sampled)
tailcall x 960,622 ops/sec ±1.09% (82 runs sampled)
memoized x 481,704 ops/sec ±1.12% (85 runs sampled)
composed x 941,759 ops/sec ±1.33% (83 runs sampled)
Fastest is tailcall,composed
```

I was kind of surprised that the `tailcall` and `composed` were actually fastest. My expectation was that the `iterative` approach would still be fastest.
