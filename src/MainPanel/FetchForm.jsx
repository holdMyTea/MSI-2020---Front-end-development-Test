import React, { useState } from 'react'

import SearchOption from './FormComponents/SearchOption'
import CategoriesSelector from './FormComponents/CategoriesSelector'

import './FetchForm.css'

const searchOptions = {
  random: 'Random',
  fromCategories: 'From categories',
  search: 'Search'
}

const FetchForm = () => {
  const [selectedOption, setSelectedOption] = useState()

  return (
    <>
      <h3 className="msi-header">MSI 2020</h3>
      <header className="hey">Hey!</header>
      <header className="find-header">Lets try to find a joke for you:</header>

      <SearchOption label='Random'
        onClick={() => setSelectedOption(searchOptions.random)}
        checked={selectedOption === searchOptions.random}
      />

      <SearchOption label='From categories'
        onClick={() => setSelectedOption(searchOptions.fromCategories)}
        checked={selectedOption === searchOptions.fromCategories}
      />
      {selectedOption === searchOptions.fromCategories && (<CategoriesSelector />)}

      <SearchOption label='Search'
        onClick={() => setSelectedOption(searchOptions.search)}
        checked={selectedOption === searchOptions.search}
      />
      {selectedOption === searchOptions.search && (
        <input type="text" name="search" id="search-input" placeholder="Free text search..." />
      )}

      <button className="search-button">Get a joke</button>
    </>
  )
}

export default FetchForm
