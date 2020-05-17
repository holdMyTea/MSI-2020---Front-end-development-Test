import React from 'react'
import t from 'prop-types'

import toggleMenuOnIcon from '../../../assets/favorite-toggle-on.svg'
import toggleMenuOffIcon from '../../../assets/favorite-toggle-off.svg'

import './MobileFavoriteToggle.scss'

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
