import React from 'react'
import t from 'prop-types'

import './FetchRadioOption.scss'

/**
 * React Component displaying a single radio with label
 * @param {Object} props
 * @param {string} props.label - name of the option
 * @param {function} props.onChange - callback when the state of the radio input changes
 * @param {boolean} props.checked - whether the option is currently selected
 */
const FetchRadioOption = ({ label, onChange, checked }) => (
  <label className='search-option'>
    {label}
    <input type='radio'
      value={label}
      checked={checked}
      name='search-option'
      onChange={onChange}
    />
    <span className='radio'></span>
  </label>
)
FetchRadioOption.propTypes = {
  label: t.string.isRequired,
  onChange: t.func.isRequired,
  checked: t.bool.isRequired
}

export default FetchRadioOption
