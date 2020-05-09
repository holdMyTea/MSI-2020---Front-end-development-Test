import React from 'react'
import t from 'prop-types'

import './TextSearchInput.css'

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
