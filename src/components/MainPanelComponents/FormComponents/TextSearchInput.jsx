import React from 'react'
import t from 'prop-types'

import './TextSearchInput.css'

/**
 * React Component rendering a text search input
 * @param {Object} props
 * @param {string} props.value - current value of the input
 * @param {boolean} props.visible - whether the compoenent should be visible
 * @param {function} props.onChange - callback when the value of the input changes
 */
const TextSearchInput = ({ value, visible, onChange }) => (
  <input className={`search-input ${visible ? 'visible-search-input' : ''}`}
    type="text"
    placeholder="Free text search..."
    value={value}
    onChange={e => onChange(e.target.value)}
  />
)
TextSearchInput.propTypes = {
  value: t.string.isRequired,
  visible: t.bool.isRequired,
  onChange: t.func.isRequired
}

export default TextSearchInput
