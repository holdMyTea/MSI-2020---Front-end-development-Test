import React, { useState } from 'react'
import t from 'prop-types'

import Joke from './JokeView'

import JokeType from '../types/JokeType'

import { useMobileLayout } from './../utils/useMobileLayout'

import toggleMenuOnIcon from '../../assets/favorite-toggle-on.svg'
import toggleMenuOffIcon from '../../assets/favorite-toggle-off.svg'

import './FavoritePanel.scss'

/**
 * React Component that renders a list of favorite jokes in a sidebar
 * @param {Object} props
 * @param {Joke[]} props.favoriteJokes - list of favorite jokes
 * @param {function} props.removeFavoriteJoke - function to remove a joke from favorites
 */
const FavoritePanel = ({ favoriteJokes, removeFavoriteJoke }) => {
  const { isTablet } = useMobileLayout()

  const [isMobileFavBarOpen, setMobileFavBarOpen] = useState(false)

  const favBarClassName = isTablet
    ? (isMobileFavBarOpen ? 'fav-bar tablet-fav-bar-open' : 'fav-bar tablet-fav-bar-closed')
    : 'fav-bar'

  console.log(favBarClassName)

  return (
    <>
      {
        isTablet && (
          <div className='mobile-fav-toggle'
            onClick={() => setMobileFavBarOpen(!isMobileFavBarOpen)}
          >
            <img src={isMobileFavBarOpen ? toggleMenuOffIcon : toggleMenuOnIcon}
              alt='show favorite menu'
            />
            <label className='fav-header'>Favorite</label>
          </div>
        )
      }

      {
        isMobileFavBarOpen && (
          <div className='fav-bar-dimmer'
            onClick={() => setMobileFavBarOpen(false)}
          />
        )
      }

      <div className={favBarClassName}>
        <div className='fav-bar-container'>
          <label className='fav-header'>Favorite</label>
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

    </>
  )
}

FavoritePanel.propTypes = {
  favoriteJokes: t.arrayOf(t.shape(JokeType)).isRequired,
  removeFavoriteJoke: t.func.isRequired
}

export default FavoritePanel
