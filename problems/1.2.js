const expect = require('chai').expect;

describe('How many 10-digit numbers can you make that include all digits 0-9? Numbers starting with 0 do not count.', () => {

  it('There are 3265920 possible permutations using a factorial approach[10! - 9!]', () => {

    // recursively calculate a factorial
    function factorial(limit) {
      if (limit === 0) {
        return 1;
      }
      return limit * factorial(limit - 1);
    }

    expect(factorial(10) - factorial(9)).to.equal(3265920);

  });

  it('There are 3265920 possible permutations using a brute force count', () => {

      function factorial(limit) {
        // fill an array of arrays for all possible numbers in the 'matrix' then multiply them up
        return Array(limit).fill(1).map(() => {
          return Array(limit).fill(1).map((el, index) => {
            return index + 1;
          });
        }).reduce((a, arr) => {
            return arr.reduce((b, el) => {
              return b * el;
            }, 1);
        }, 1);
      }

      expect(factorial(10) - factorial(9)).to.equal(3265920);

  });
});
