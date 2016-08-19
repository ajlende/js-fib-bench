# JS Fibonacci Benchmarks

Just some comparisons of various programming techniques for computing the nth Fibonacci number

Requires node.js >= v7.0.0 (currently the nightly build) since that is the first version that supports tail-call optimization

Versions less than that will still run; however, the V8 engine won't optimize the tail-call recursion and you probably won't see an improvement for `tailcall`

# Running
1. (Optional) Install node.js >= v7.0.0 (At the time of this writing is a nightly build. The one that I used was `v7.0.0-nightly201608173177b99737`. It can be installed using [nvm](https://github.com/creationix/nvm) with `NVM_NODEJS_ORG_MIRROR=https://nodejs.org/download/nightly nvm install v7.0.0-nightly201608173177b99737`)
2. `npm install`
3. (Optional) `npm test` OR `node --harmony test.js` to confirm that all fibs work
4. `npm start` OR `node --harmony run.js [FIB_NUMBER]`

# Implementations
- `iterative`: An iterative approach that you probably learned in a CS class after they told you the naive recursive approach was garbage
- `iterativees6`: An iterative approach with an in-place swap using ES6 array destructuring assignment just to see if there were any optimizations for the swap (spoiler: there aren't)
- `recursive`: The naive approach that y'all used when you were learning recursion
- `tailcall`: A version that you may have seen in a functional programming class that uses a smarter recursion that can be optimized by some compilers/interpreters (in our case the V8 engine)
- `memoized`: The first dynamic programming algorithm you were probably introduced to using a cache of previously computed steps to prevent duplicate work
- `composed`: A simple memoization wrapper that wraps the naive recursive approach because higher-order functions are the best
- `closedform`: The closed form function of the infinite series (Floating point precision is only precise enough to compute up to the 75th Fibonacci number)
- `lookup`: Arguably the best implementation because it's just a lookup table/array and is `O(1)` time and space (The native `Number` type in Javascript is only big enough to hold up to the 79th Fibonacci number which is reasonable to store in a table/array)

# Results
These are the results that I got on my Macbook

```
$ node --harmony run.js 32
iterative x 763,905 ops/sec ±0.91% (84 runs sampled)
iterativees6 x 112,614 ops/sec ±1.16% (89 runs sampled)
recursive x 4.96 ops/sec ±6.74% (16 runs sampled)
composed x 1,031,719 ops/sec ±1.60% (82 runs sampled)
tailcall x 1,016,012 ops/sec ±1.04% (86 runs sampled)
memoized x 507,615 ops/sec ±1.05% (85 runs sampled)
closedform x 4,603,626 ops/sec ±1.15% (83 runs sampled)
lookup x 6,155,979 ops/sec ±0.96% (87 runs sampled)
Fastest is lookup
```

Obviously, the fastest was going to be `lookup`, but what surprised me was that `composed` was the third fastest—twice as fast as `memoization`. Both use a similar strategy of caching previously computed values, but composed doing so in an outer, memoization function rather than directly in the main Fibonacci function. Another surprise to me was that `tailcall` was nearly as fast as `composed`—taking fourth place ahead of both iterative solutions.

# Further Reading
Apparently I wasn't the first to get bored one day and test this stuff. @ericelliott did a [similar thing](https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710) with [ES6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator), and @devlucky wrote about the [classic example](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e) (recursive/iterative/memoization) in more depth.
