const storage = window.localStorage

/**
 * Stores the joke in the localStorage
 * @param {Joke} jokeObject
 */
const storeJoke = jokeObject => storage.setItem(`joke-${jokeObject.id}`, JSON.stringify(jokeObject))

/**
 * Removes the joke with id===jokeId from the localStorage
 * @param {string} jokeId
 */
const removeJoke = jokeId => storage.removeItem(`joke-${jokeId}`)

/**
 * Gets the list of favorite jokes from the localStorage
 */
const fetchStoredFavoriteJokes = () => {
  const jokes = {}
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)
    if (key.startsWith('joke-')) {
      const j = JSON.parse(storage.getItem(key))
      jokes[j.id] = j
    }
  }
  return jokes
}

export {
  storeJoke,
  removeJoke,
  fetchStoredFavoriteJokes
}
