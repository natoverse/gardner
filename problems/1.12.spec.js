/**
 *
 */
describe(`
Create a row with 10 columns, numbered 0 through 9.
Inscribe a 10-digit number such that the digit in the "0" cell indicates
the total number of zeros in the entire number, the digit in the "1"
indicates how many ones, and so on to the last cell, whose digit indicates the
total number of nines in the number. The answer is unique.
 `, () => {
	function checkNumber(number, length) {
		// start by getting a zero-padded string so we have a digit in each position
		// then convert that full-length number to an array of numbers
		const str = `${number}`.padStart(length, '0')
		const chars = str.split('')
		const numbers = chars.map(c => +c)
		// count 'em up
		const counts = new Array(length).fill(0)
		for (let j = 0; j < length; j++) {
			counts[numbers[j]]++
		}
		// now validate that they all match
		const matched = numbers.every((n, idx) => n === counts[idx])
		return matched ? str : null
	}

	function collectNumbers(length) {
		const max = Math.pow(10, length) - 1
		const results = []
		for (let i = 0; i <= max; i++) {
			const match = checkNumber(i, length)
			if (match) {
				results.push(`${i}`.padStart(length, '0'))
			}
		}
		return results
	}

	test('Check the possible 4-digit numbers', () => {
		const results = collectNumbers(4)
		expect(results).toEqual(['1210', '2020'])
	})

	test('Check the possible 5-digit numbers', () => {
		const results = collectNumbers(5)
		expect(results).toEqual(['21200'])
	})

	// this actually takes a long time to run (like 1hr+), so only unskip if you really need to verify :)
	test.skip('Check the possible 10-digit numbers', () => {
		const results = collectNumbers(10)
		expect(results).toEqual(['6210001000'])
	})
})
