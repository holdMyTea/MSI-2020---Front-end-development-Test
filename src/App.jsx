import React, { useState, useEffect } from 'react'

import MainPanel from './components/MainPanel'
import FavoritePanel from './components/FavoritePanel'

import { fetchStoredFavoriteJokes, storeJoke, removeJoke } from './utils/favoriteStorage'

import './App.scss'
import './reset.css'

/**
 * The root React Component
 */
const App = () => {
  // stores the list of favorite jokes
  const [favoriteJokes, setFavoriteJokes] = useState({})

  // Get the list of favorite jokes from the localStorage on first render
  useEffect(() => setFavoriteJokes(
    fetchStoredFavoriteJokes()
  ), [])

  /**
   * Adds the `joke` to the list of favorite ones in the local state and stores it in localStorage
   * @param {Joke} joke
   */
  const addFavoriteJoke = joke => {
    storeJoke(joke)
    setFavoriteJokes({
      ...favoriteJokes,
      [joke.id]: joke
    })
  }

  /**
   * Removes the `joke` from the list of favorite ones in the local state and removes it from localStorage
   * @param {Joke} joke
   */
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

  /**
   * Checks if the `joke` is in the list of favorite ones in the local state
   * @param {Joke} joke
   */
  const isJokeFavorite = joke => !!favoriteJokes[joke.id]

  return (
    <div className='app'>
      <MainPanel
        addFavoriteJoke={addFavoriteJoke}
        removeFavoriteJoke={removeFavoriteJoke}
        isJokeFavorite={isJokeFavorite}
      />
      <FavoritePanel
        favoriteJokes={Object.values(favoriteJokes)}
        removeFavoriteJoke={removeFavoriteJoke}
      />
    </div>
  )
}

export default App
