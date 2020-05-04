import React from 'react'

import messageIcon from '../../assets/message-icon.svg'
import emptyHeartIcon from '../../assets/empty-heart-icon.svg'
import filledHeartIcon from '../../assets/filled-heart-icon.svg'

import './JokeView.css'

const Joke = ({ id, text, favorite, lastUpdated }) => (
  <div className="fetched-joke">

    <div className="joke-favorite-container">
      <img src={favorite ? filledHeartIcon : emptyHeartIcon} alt="Favorite the joke" />
    </div>

    <div className="fetched-joke-body">

      <div className="joke-icon-column">
        <img src={messageIcon} alt="Small icon of a message" />
      </div>

      <div className="joke-main-column">
        <div className="joke-link-row">
          <span className="joke-id-label">
            ID:
            <a href="localhost">
              <span>{id}</span>
              <img src="./assets/link-icon.svg" alt="Link icon" />
            </a>
          </span>
        </div>

        <p className="joke-text">
          {text}
        </p>

        <div className="joke-footer">
          <span className="joke-last-update">Last update: {lastUpdated} hours ago</span>
          <span className="joke-category">celebrity</span>
        </div>
      </div>

    </div>

  </div>
)

export default Joke
