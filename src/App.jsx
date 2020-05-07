import React, { useState, useEffect } from 'react'

import MainPanel from './MainPanel/MainPanel'
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
    console.log('liked')
    storeJoke(joke)
    setFavoriteJokes({
      ...favoriteJokes,
      [joke.id]: joke
    })
  }

  const removeFavoriteJoke = joke => {
    const { id } = joke
    removeJoke(id)
    setFavoriteJokes(
      Object.entries(favoriteJokes)
        .reduce((acc, [key, value]) => {
          if (key !== id) {
            acc[key] = value
          }
          return acc
        }, {})
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
        removeFavoriteJoke={removeFavoriteJoke}
        favoriteJokes={favoriteJokes}
      />
    </>
  )
}

export default App
