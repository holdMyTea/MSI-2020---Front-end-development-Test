import React from 'react'
import t from 'prop-types'

import Joke from './JokeView'

import './FavoritePanel.css'

const FavoritePanel = ({ favoriteJokes, removeFavoriteJoke }) => (
  <div className="fav-bar">
    <div className="fav-bar-container">
      <header>Favorite</header>
      {
        favoriteJokes.map(j => (
          <Joke key={j.id}
            {...j}
            isFavorite={true}
            categories={[]}
            onHeartClick={() => removeFavoriteJoke(j)}
          />
        ))
      }
    </div>
  </div>
)
FavoritePanel.propTypes = {
  favoriteJokes: t.arrayOf(
    t.shape({
      id: t.string.isRequired,
      text: t.string.isRequired,
      updatedAt: t.string.isRequired
    })
  ),
  removeFavoriteJoke: t.func.isRequired
}

export default FavoritePanel
