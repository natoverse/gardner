describe(`
Consider a terminal window with a fixed character width (say, the traditional 80).
Think of a sentence that is shorter than this width.
Proceed to print the sentence repeatedly, with a period and space at the end of each.
When you see that the next word cannot fit within the line width,
wrap to the next line and begin at the left (consider the final word + period as one unit).
Do not hyphenate or otherwise break any word. 
Do this until you have 50 rows of text.
Are you guaranteed to always have at least one perfectly straight column of blank spaces
running from top to bottom? (monospace font of course)
`, () => {
	function fill(sentence, width, rowCount) {
		const words = sentence.split(' ')
		const rows = []
		let currentRow = 0
		let currentWord = 0

		while (currentRow < rowCount) {
			let row = ''
			while (true) {
				const word = words[currentWord]
				const remaining = width - row.length
				if (remaining >= word.length) {
					row += word
					// add the space for next word if space remains
					if (remaining >= word.length + 1) {
						row += ' '
					}
				} else {
					rows.push(row)
					currentRow++
					break
				}
				currentWord++
				if (currentWord === words.length) {
					currentWord = 0
				}
			}
		}

		// pad the rows to ensure they are exactly the requested width
		return rows.map((r) => r.padEnd(width, ' '))
	}

	function verify(rows, length) {
		for (let col = 0; col < length; col++) {
			if (rows.every((row) => row[col] === ' ')) {
				return true
			}
		}
		return false
	}

	test('Filled and wrapped rows confirm at least one column.', () => {
		const width = 80
		const rowCount = 50
		const rows = fill(
			'All work and no play makes Jack a dull boy.',
			width,
			rowCount
		)
		console.log(rows.slice(0, 10))
		// verify structure is correct
		expect(rows.length).toBe(rowCount)
		expect(rows.every((r) => r.length === width)).toBe(true)
		// verify at least one blank column
		const verified = verify(rows, width)
		expect(verified).toBe(true)
	})
})
