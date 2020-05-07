import React from 'react'
import t from 'prop-types'

import messageIcon from '../../assets/message-icon.svg'
import emptyHeartIcon from '../../assets/empty-heart-icon.svg'
import filledHeartIcon from '../../assets/filled-heart-icon.svg'

import './JokeView.css'

const countHoursSinceDate = dateString => {
  const start = new Date(dateString).getTime()
  const end = new Date().getTime()
  return Math.floor((end - start) / 3600000)
}

const Joke = ({ id, text, isFavorite, updatedAt, categories, onHeartClick }) => (
  <div className="fetched-joke">

    <div className="joke-favorite-container">
      <img src={isFavorite ? filledHeartIcon : emptyHeartIcon}
        alt={isFavorite ? 'Remove the joke from favorite' : 'Add the joke to favorite' }
        onClick={onHeartClick}
      />
    </div>

    <div className="fetched-joke-body">

      <div className="joke-icon-column">
        <img src={messageIcon} alt="Small icon of a message" />
      </div>

      <div className="joke-main-column">
        <div className="joke-link-row">
          <span className="joke-id-label">
            ID:
            <a href={`https://api.chucknorris.io/jokes/${id}`}>
              <span>{id}</span>
              <img src="./assets/link-icon.svg" alt="Link icon" />
            </a>
          </span>
        </div>

        <p className="joke-text">
          {text}
        </p>

        <div className="joke-footer">
          <span className="joke-last-update">
            Last update: {countHoursSinceDate(updatedAt)} hours ago
          </span>
          {
            categories.map(c => (
              <span className="joke-category" key={`${id}-${c}`}>{c}</span>
            ))
          }
        </div>
      </div>

    </div>

  </div>
)
Joke.propTypes = {
  id: t.string.isRequired,
  text: t.string.isRequired,
  isFavorite: t.bool.isRequired,
  updatedAt: t.string.isRequired,
  categories: t.arrayOf(t.string).isRequired,
  onHeartClick: t.func.isRequired
}

export default Joke
