import React, { useState } from 'react'
import t from 'prop-types'

import FetchForm from './FetchForm'
import FetchResults from './FetchResults'

import './MainPanel.css'

const MainPanel = ({ addFavoriteJoke, removeFavoriteJoke, isJokeFavorite }) => {
  const [fetchedJokes, setFetchedJokes] = useState([])

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
