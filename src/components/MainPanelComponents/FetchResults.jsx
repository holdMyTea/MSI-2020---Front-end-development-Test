import React from 'react'
import t from 'prop-types'

import Joke from '../../components/JokeView'

import JokeType from '../../types/JokeType'

import { useMobileLayout } from '../../utils/useMobileLayout'

import './FetchResults.scss'

/**
 * React Component rendering the list of fetched jokes
 * @param {Object} props
 * @param {Joke[]} props.jokes
 */
const FetchResults = ({ jokes }) => {
  const { isMobile } = useMobileLayout()
  return (
    <div className={isMobile ? 'mobile-fetch-results' : 'fetch-results'}>
      {
        jokes.map(j => (
          <Joke key={j.id} {...j} />
        ))
      }
    </div>
  )
}
FetchResults.propTypes = {
  jokes: t.arrayOf(t.shape(JokeType)).isRequired
}

export default FetchResults
