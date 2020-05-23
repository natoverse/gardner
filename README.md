# gardner

Brute force solutions to Martin Gardner puzzles

## What is this?

I thought it might be fun to code up brute force solutions to a bunch of [Martin Gardner](https://en.wikipedia.org/wiki/Martin_Gardner) puzzles.

Many of these puzzles have very elegant mathematical solutions, but a brute force algorithm is sometimes an easier way to understand or illustrate a concept.

I'm working from [The Colossal Book of Short Puzzles and Problems](https://www.amazon.com/Colossal-Book-Short-Puzzles-Problems/dp/0393061140/ref=sr_1_2?ie=UTF8&qid=1484882213&sr=8-2&keywords=gardner+puzzles); I've numbered them to match so they are easy look up.

I have no idea how many of these I'll work on, probably until I get bored or they get too complicated to be fun with this approach. Feel free to submit new solutions with a PR. Or just take the code and do whatever you want with it.

## Getting started

Since these are "proofs", it seemed appropriate to structure the project around assertions. Therefore, I've baked the test cases and solutions into the same file. They use [Jest](https://jestjs.io/), with a short description of the problem and `test` blocks containing a description + proof of the solution (one or more, depending how many solutions I wanted to illustrate for the problem).

You need a newer version of [Node.js](https://nodejs.org/en/) that supports ES6 syntax.

- `yarn` to get dependencies
- `yarn test` anytime you want to run the tests, or `yarn start` to start a watcher that runs them every time the code changes.
