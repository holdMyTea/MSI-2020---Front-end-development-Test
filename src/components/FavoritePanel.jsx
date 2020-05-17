import React, { useState } from 'react'
import t from 'prop-types'

import MobileFavoriteToggle from './FavoritePanelComponents/MobileFavoriteToggle'
import Joke from './JokeView'

import JokeType from '../types/JokeType'

import { useMobileLayout } from './../utils/useMobileLayout'

import './FavoritePanel.scss'

/**
 * React Component that renders a list of favorite jokes in a sidebar
 * @param {Object} props
 * @param {Joke[]} props.favoriteJokes - list of favorite jokes
 * @param {function} props.removeFavoriteJoke - function to remove a joke from favorites
 */
const FavoritePanel = ({ favoriteJokes, removeFavoriteJoke }) => {
  const { isTablet, isMobile } = useMobileLayout()

  const [isMobileFavBarOpen, setMobileFavBarOpen] = useState(false)
  const onFavBarToggleClick = () => setMobileFavBarOpen(!isMobileFavBarOpen)

  const favBarClassName = isTablet
    ? (isMobileFavBarOpen ? 'tablet-fav-bar-open' : 'tablet-fav-bar-closed')
    : isMobile
      ? (isMobileFavBarOpen ? 'mobile-fav-bar-open' : 'mobile-fav-bar-closed')
      : ''

  return (
    <>
      {
        (isTablet || isMobile) && (
          <MobileFavoriteToggle
            isTablet={isTablet}
            isFavBarOpen={isMobileFavBarOpen}
            onToggleClick={onFavBarToggleClick}
          />
        )
      }

      {
        (isMobileFavBarOpen && isTablet) && (
          <div className='fav-bar-dimmer'
            onClick={() => setMobileFavBarOpen(false)}
          />
        )
      }

      <div className={`fav-bar ${favBarClassName}`}>
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
