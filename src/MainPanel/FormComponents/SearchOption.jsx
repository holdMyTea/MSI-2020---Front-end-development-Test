import React from 'react'

import './SearchOption.css'

const SearchOption = ({ label, value, onClick }) => (
  <label className="search-option" onClick={onClick}>
    {label}
    <input type="radio" value={value} name="search-option" />
    <span className="radio"></span>
  </label>
)

export default SearchOption
