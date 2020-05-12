import React, { useState } from 'react'
import t from 'prop-types'

import FetchForm from './MainPanelComponents/FetchForm'
import FetchResults from './MainPanelComponents/FetchResults'

import './MainPanel.css'

/**
 * React Component that renders fetch form and corresponding results.
 * @param {Object} props
 * @param {function} props.addFavoriteJoke - function to add a joke to the list of favorites
 * @param {function} props.removeFavoriteJoke - function to remove a joke from the list of favorites
 * @param {function} props.isJokeFavorite - function to check if a joke in the list of favorites
 */
const MainPanel = ({ addFavoriteJoke, removeFavoriteJoke, isJokeFavorite }) => {
  // state for storing jokes fetched by the `FetchForm`
  const [fetchedJokes, setFetchedJokes] = useState([])

  // mapping `fetchedJokes` to check if each jokes is favorite, add corresponding onClick function
  const jokes = fetchedJokes.map(j => {
    const isFavorite = isJokeFavorite(j)
    j.isFavorite = isFavorite
    j.onHeartClick = isFavorite
      ? () => removeFavoriteJoke(j)
      : () => addFavoriteJoke(j)
    j.updatedAt = j.updated_at
    j.text = j.value
    return j
  })

  return (
    <main>
      <div className="container">

        <FetchForm onFetched={setFetchedJokes} />
        <FetchResults jokes={jokes} />

      </div>
    </main>
  )
}
MainPanel.propTypes = {
  addFavoriteJoke: t.func.isRequired,
  removeFavoriteJoke: t.func.isRequired,
  isJokeFavorite: t.func.isRequired
}

export default MainPanel
