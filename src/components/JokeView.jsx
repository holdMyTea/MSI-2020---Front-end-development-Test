import React from 'react'

import messageIcon from '../../assets/message-icon.svg'
import emptyHeartIcon from '../../assets/empty-heart-icon.svg'
import filledHeartIcon from '../../assets/filled-heart-icon.svg'

import JokeType from '../types/JokeType'

import './JokeView.scss'

/**
 * Counts number of hours passed since the `dateString`
 * @param {string} dateString
 */
const countHoursSinceDate = dateString => {
  const start = new Date(dateString).getTime()
  const end = new Date().getTime()
  return Math.floor((end - start) / 3600000)
}

/**
 * React Component that renders a signle Joke view
 * @param {Joke} props - Joke object to be rendered
 */
const Joke = ({ id, text, isFavorite, updatedAt, categories, onHeartClick }) => (
  <div className='fetched-joke'>

    {/* The top-right corner's heart icon and its container */}
    <div className='joke-favorite-container'>
      <img src={isFavorite ? filledHeartIcon : emptyHeartIcon}
        alt={isFavorite ? 'Remove the joke from favorite' : 'Add the joke to favorite' }
        onClick={onHeartClick}
      />
    </div>

    <div className='fetched-joke-body'>

      {/* The left-hand side column with the message icon in it */}
      <div className='joke-icon-column'>
        <img src={messageIcon} alt='Small icon of a message' />
      </div>

      <div className='joke-main-column'>

        {/* The link to the joke righ above the joke's text */}
        <div className='joke-link-row'>
          <span className='joke-id-label'>
            ID:
            <a href={`https://api.chucknorris.io/jokes/${id}`}>
              <span>{id}</span>
              <img src='./assets/link-icon.svg' alt='Link icon' />
            </a>
          </span>
        </div>

        {/* The actual text of the joke */}
        <p className='joke-text'>
          {text}
        </p>

        <div className='joke-footer'>
          {/* The `Last updated` left-hand side part of the footer */}
          <span className='joke-last-update'>
            Last update: {countHoursSinceDate(updatedAt)} hours ago
          </span>
          {
            // Category labels of the joke (if any)
            categories.map(c => (
              <span className='joke-category' key={`${id}-${c}`}>{c}</span>
            ))
          }
        </div>

      </div>

    </div>

  </div>
)
Joke.propTypes = JokeType

export default Joke
