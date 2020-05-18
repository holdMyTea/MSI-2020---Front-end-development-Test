import React from 'react'
import t from 'prop-types'

import toggleMenuOnIcon from '../../../assets/favorite-toggle-on.svg'
import toggleMenuOffIcon from '../../../assets/favorite-toggle-off.svg'

import './MobileFavoriteToggle.scss'

/**
 * React Component rendering a floating top-right corner button
 * hiding/showing the Favorites bar.
 * @param {Object} props
 * @param {boolean} isTablet - if `true` will render tablet layout, otherwise - mobile
 * @param {boolean} isFavBarOpen - will render opening/closing icon depending on the value
 * @param {function} onToggleClick
 */
const MobileFavoriteToggle = ({ isTablet, isFavBarOpen, onToggleClick }) => (
  <div className={`${isTablet ? 'tablet' : 'mobile'}-fav-toggle`}
    onClick={onToggleClick}
  >
    <img src={isFavBarOpen ? toggleMenuOffIcon : toggleMenuOnIcon}
      alt={isFavBarOpen ? 'hide favorite menu' : 'show favorite menu'}
    />
    <label className='fav-header'>Favorite</label>
  </div>
)
MobileFavoriteToggle.propTypes = {
  isTablet: t.bool.isRequired,
  isFavBarOpen: t.bool.isRequired,
  onToggleClick: t.func.isRequired
}

export default MobileFavoriteToggle
