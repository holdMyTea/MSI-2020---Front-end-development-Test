const categories = ['animal', 'career', 'celebrity']

const fetch = jest.fn()

fetch.mockResolvedValue({
  json: () => categories
})

/**
 * Adds a single time mock for `fetch`'s resolve value that simulates joke(s) fetching.
 * @param {number} [numberOfJokes = 1]
 */
const mockJokeFetching = (numberOfJokes = 1) => {
  if (numberOfJokes === 1) {
    fetch.mockResolvedValueOnce({
      json: () => ({
        categories: [],
        created_at: '2020-01-05 13:42:22.980058',
        id: 'sampleId' + new Date().getTime(),
        updated_at: '2020-01-05 13:42:22.980058',
        value: 'Chuck Norris once made a cannibal eat a bowl of creamed asparagus soup.'
      })
    })
  } else {
    const mockedJokes = new Array(numberOfJokes).fill(0).map((v, i) => ({
      categories: [],
      created_at: '2020-01-05 13:42:22.980058',
      id: 'sampleId' + i + new Date().getTime(),
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
