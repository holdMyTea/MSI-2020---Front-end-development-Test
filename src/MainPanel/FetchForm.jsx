import React, { useState, useEffect } from 'react'

import SearchOption from './FormComponents/SearchOption'
import CategoriesSelector from './FormComponents/CategoriesSelector'
import TextSearchInput from './FormComponents/TextSearchInput'

import './FetchForm.css'

const searchOptions = {
  random: 'Random',
  fromCategories: 'From categories',
  search: 'Search'
}

const FetchForm = () => {
  // state for search option
  const [selectedOption, setSelectedOption] = useState()

  // stores fetched joke categories
  const [categories, setCategories] = useState([])

  // state for the selected category within CategorySelector
  const [selectedCategory, setSelectedCategory] = useState()

  // state for text search input
  const [textSearchInput, setTextSearchInput] = useState('')

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(body => setCategories(body))
  })

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
      <CategoriesSelector
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
        visible={selectedOption === searchOptions.fromCategories}
      />

      <SearchOption label='Search'
        onClick={() => setSelectedOption(searchOptions.search)}
        checked={selectedOption === searchOptions.search}
      />
      <TextSearchInput value={textSearchInput}
        onChange={setTextSearchInput}
        visible={selectedOption === searchOptions.search}
      />

      <button className="search-button">Get a joke</button>
    </>
  )
}

export default FetchForm
