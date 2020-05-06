import React from 'react'
import t from 'prop-types'

import Joke from '../components/JokeView'

import './FetchResults.css'

const FetchResults = ({ jokes }) => (
  <div className="fetch-results">
    {
      jokes.map(j => (
        <Joke key={j.id}
          id={j.id}
          text={j.value}
          favorite={false}
          updatedAt={j.updated_at}
          categories={j.categories}
        />
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
      categories: t.arrayOf(t.string).isRequired
    })
  ).isRequired
}

export default FetchResults
