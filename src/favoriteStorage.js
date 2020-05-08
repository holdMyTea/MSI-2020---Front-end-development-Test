const storage = window.localStorage

const storeJoke = jokeObject => storage.setItem(`joke-${jokeObject.id}`, JSON.stringify(jokeObject))

const removeJoke = jokeId => storage.removeItem(`joke-${jokeId}`)

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
