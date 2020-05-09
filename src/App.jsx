import React, { useState, useEffect } from 'react'

import MainPanel from './components/MainPanel'
import FavoritePanel from './components/FavoritePanel'

import { fetchStoredFavoriteJokes, storeJoke, removeJoke } from './favoriteStorage'

import './reset.css'

const App = () => {
  // stores the list of favorite jokes
  const [favoriteJokes, setFavoriteJokes] = useState({})

  useEffect(() => setFavoriteJokes(
    fetchStoredFavoriteJokes()
  ), [])

  const addFavoriteJoke = joke => {
    storeJoke(joke)
    setFavoriteJokes({
      ...favoriteJokes,
      [joke.id]: joke
    })
  }

  const removeFavoriteJoke = joke => {
    const { id } = joke
    const filtered = Object.entries(favoriteJokes)
      .reduce((acc, [key, value]) => {
        if (key !== id) {
          acc[key] = value
        }
        return acc
      }, {})
    removeJoke(id)
    setFavoriteJokes(
      filtered
    )
  }

  const isJokeFavorite = joke => !!favoriteJokes[joke.id]

  return (
    <>
      <MainPanel
        addFavoriteJoke={addFavoriteJoke}
        removeFavoriteJoke={removeFavoriteJoke}
        isJokeFavorite={isJokeFavorite}
      />
      <FavoritePanel
        favoriteJokes={Object.values(favoriteJokes)}
        removeFavoriteJoke={removeFavoriteJoke}
      />
    </>
  )
}

export default App
