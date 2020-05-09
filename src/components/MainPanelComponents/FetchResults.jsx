import React from 'react'
import t from 'prop-types'

import Joke from '../../components/JokeView'

import './FetchResults.css'

const FetchResults = ({ jokes }) => (
  <div className="fetch-results">
    {
      jokes.map(j => (
        <Joke key={j.id} {...j} />
      ))
    }
  </div>
)
FetchResults.propTypes = {
  jokes: t.arrayOf(
    t.shape({
      id: t.string.isRequired,
      value: t.string.isRequired,
      updated_at: t.string.isRequired,
      categories: t.arrayOf(t.string).isRequired,
      isFavorite: t.bool.isRequired,
      onHeartClick: t.func.isRequired
    })
  ).isRequired
}

export default FetchResults
