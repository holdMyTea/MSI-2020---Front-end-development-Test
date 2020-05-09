import React from 'react'
import t from 'prop-types'

import Joke from './JokeView'

import JokeType from '../types/JokeType'

import './FavoritePanel.css'

/**
 * React Component that renders a list of favorite jokes in a sidebar
 * @param {Object} props
 * @param {Joke[]} props.favoriteJokes - list of favorite jokes
 * @param {function} props.removeFavoriteJoke - function to remove a joke from favorites
 */
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
  favoriteJokes: t.arrayOf(t.shape(JokeType)).isRequired,
  removeFavoriteJoke: t.func.isRequired
}

export default FavoritePanel
