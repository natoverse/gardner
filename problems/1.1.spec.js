describe('How many ambiguous days are there in a year comparing mm/dd/yyyy versus dd/mm/yyyy formats?', () => {
	test('There are 132 ambiguous dates in a year [12 * (12 - 1) = 132]', () => {
		// create a full year of dates to work with
		const base = Array(365)
			.fill(new Date(2017, 0, 1))
			.map((d, index) => {
				const date = new Date(d.valueOf())
				date.setDate(index + 1)
				return date
			})

		// create a hash of European formatted dates to check
		const euro = base.reduce((hash, date) => {
			hash[`${date.getDate()}-${date.getMonth() + 1}`] = true
			return hash
		}, {})

		// match up all the US-formatted dates with a Euro date, but don't include ones where day and month are the same
		const ambiguous = base.filter(date => {
			return date.getMonth() + 1 !== date.getDate() && euro[`${date.getMonth() + 1}-${date.getDate()}`]
		})

		expect(ambiguous.length).toEqual(132)
	})
})
