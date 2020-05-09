import React, { useState, useEffect } from 'react'
import t from 'prop-types'

import SearchOption from './FormComponents/SearchOption'
import CategoriesSelector from './FormComponents/CategoriesSelector'
import TextSearchInput from './FormComponents/TextSearchInput'

import './FetchForm.css'

const searchOptions = {
  random: 'Random',
  fromCategories: 'From categories',
  search: 'Search'
}

const FetchForm = ({ onFetched }) => {
  // state for search option
  const [selectedOption, setSelectedOption] = useState(searchOptions.random)

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
  }, [])

  const onSubmit = () => {
    let fetchURL
    if (selectedOption === searchOptions.random) {
      fetchURL = 'https://api.chucknorris.io/jokes/random'
    } else if (selectedOption === searchOptions.fromCategories) {
      if (!selectedCategory) {
        return
      }
      fetchURL = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
    } else if (selectedOption === searchOptions.search) {
      if (textSearchInput === '') {
        return
      }
      fetchURL = `https://api.chucknorris.io/jokes/search?query=${textSearchInput}`
    } else {
      return
    }

    fetch(fetchURL)
      .then(response => response.json())
      .then(body => {
        if (body.total) { // when there're multiple jokes
          onFetched(body.result)
        } else { // when there's only one
          onFetched([body])
        }
      })
  }

  return (
    <>
      <h3 className="msi-header">MSI 2020</h3>
      <header className="hey">Hey!</header>
      <header className="find-header">Lets try to find a joke for you:</header>

      <SearchOption label='Random'
        onChange={() => setSelectedOption(searchOptions.random)}
        checked={selectedOption === searchOptions.random}
      />

      <SearchOption label='From categories'
        onChange={() => setSelectedOption(searchOptions.fromCategories)}
        checked={selectedOption === searchOptions.fromCategories}
      />
      <CategoriesSelector
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
        visible={selectedOption === searchOptions.fromCategories}
      />

      <SearchOption label='Search'
        onChange={() => setSelectedOption(searchOptions.search)}
        checked={selectedOption === searchOptions.search}
      />
      <TextSearchInput value={textSearchInput}
        onChange={setTextSearchInput}
        visible={selectedOption === searchOptions.search}
      />

      <button onClick={onSubmit} className="search-button">Get a joke</button>
    </>
  )
}
FetchForm.propTypes = {
  onFetched: t.func.isRequired
}

export default FetchForm
