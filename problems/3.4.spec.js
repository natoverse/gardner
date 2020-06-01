describe('Find a number base other than 10 in which 121 is a perfect square.', () => {
	const INPUT = 121

	describe('Solution using built-in parseInt and sqrt', () => {
		/**
		 * Find a number that squares using the specified base.
		 * We do this by parsing with a specified base so we can then
		 * use the built-in sqrt function, which only operates on base 10,
		 * to confirm if the result is square (no remainder).
		 * @param {*} square
		 * @param {*} base
		 */
		function isSquare(square, base) {
			const parsed = parseInt(square, base)
			const root = Math.sqrt(parsed)
			return root % 1 === 0
		}

		test('Confirm isSquare works with 10', () => {
			expect(isSquare(INPUT, 10)).toBe(true)
		})

		test('Any base greater than 2', () => {
			// with this method we can only confirm up to 36, the limit of parseInt's base ability
			// note that we can't test 2 or lower because 121 is not valid in those bases
			for (let i = 3; i <= 36; i++) {
				expect(isSquare(INPUT, i)).toBe(true)
			}
		})
	})
})
