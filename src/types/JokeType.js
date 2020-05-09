import t from 'prop-types'

/**
 * @typedef Joke
 * @property {string} id
 * @property {string} text
 * @property {boolean} isFavorite
 * @property {updatedAt} string
 * @property {string[]} categories
 * @property {function} onHeartClick
 */

const JokeType = {
  id: t.string.isRequired,
  text: t.string.isRequired,
  isFavorite: t.bool.isRequired,
  updatedAt: t.string.isRequired,
  categories: t.arrayOf(t.string).isRequired,
  onHeartClick: t.func
}

export default JokeType
