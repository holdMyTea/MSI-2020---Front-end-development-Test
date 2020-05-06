import React from 'react'
import t from 'prop-types'

import './SearchOption.css'

const SearchOption = ({ label, onChange, checked }) => (
  <label className="search-option">
    {label}
    <input type="radio"
      checked={checked}
      name="search-option"
      onChange={onChange}
    />
    <span className="radio"></span>
  </label>
)
SearchOption.propTypes = {
  label: t.string.isRequired,
  onChange: t.func.isRequired,
  checked: t.bool.isRequired
}

export default SearchOption
