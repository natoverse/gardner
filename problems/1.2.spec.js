describe('How many 10-digit numbers can you make that include all digits 0-9? Numbers starting with 0 do not count.', () => {
	test('There are 3265920 possible permutations using a factorial approach[10! - 9!]', () => {
		// recursively calculate a factorial
		function factorial(limit) {
			if (limit === 0) {
				return 1
			}
			return limit * factorial(limit - 1)
		}

		expect(factorial(10) - factorial(9)).toEqual(3265920)
	})

	test('There are 3265920 possible permutations using a brute force count', () => {
		function factorial(limit) {
			// fill an array of arrays for all possible numbers in the 'matrix' then multiply them up
			return Array(limit)
				.fill(1)
				.map(() =>
					Array(limit)
						.fill(1)
						.map((el, index) => index + 1)
				)
				.reduce((a, arr) => arr.reduce((b, el) => b * el, 1), 1)
		}

		expect(factorial(10) - factorial(9)).toEqual(3265920)
	})
})
