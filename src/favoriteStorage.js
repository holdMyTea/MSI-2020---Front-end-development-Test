const storage = window.localStorage

const storeJoke = jokeObject => storage.setItem(`joke-${jokeObject.id}`, JSON.stringify(jokeObject))

const removeJoke = jokeId => storage.removeItem(jokeId)

const fetchStoredFavoriteJokes = () => {
  const jokes = []
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i)
    if (key.startsWith('joke-')) {
      jokes.push(
        JSON.parse(
          storage.getItem(key)
        )
      )
    }
  }
  return jokes
}

export {
  storeJoke,
  removeJoke,
  fetchStoredFavoriteJokes
}
