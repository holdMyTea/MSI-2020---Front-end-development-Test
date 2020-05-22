const categories = ['animal', 'career', 'celebrity']

const fetch = jest.fn()

fetch.mockResolvedValue({
  json: () => categories
})

const mockJokeFetching = (numberOfJokes = 1) => {
  if (numberOfJokes === 1) {
    fetch.mockResolvedValueOnce({
      json: () => ({
        categories: [],
        created_at: '2020-01-05 13:42:22.980058',
        id: 'QP_esj66TTiqH5m4NTPglg',
        updated_at: '2020-01-05 13:42:22.980058',
        value: 'Chuck Norris once made a cannibal eat a bowl of creamed asparagus soup.'
      })
    })
  } else {
    const mockedJokes = new Array(numberOfJokes).fill(0).map((v, i) => ({
      categories: [],
      created_at: '2020-01-05 13:42:22.980058',
      id: 'sampleId' + i,
      updated_at: '2020-01-05 13:42:22.980058',
      value: 'Chuck Norris once made a cannibal eat a bowl of creamed asparagus soup.'
    }))
    fetch.mockResolvedValueOnce({
      json: () => ({
        total: numberOfJokes,
        result: mockedJokes
      })
    })
  }
}

export {
  categories,
  fetch,
  mockJokeFetching
}
