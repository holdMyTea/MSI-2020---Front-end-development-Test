import React, { useState, useEffect } from 'react'
import t from 'prop-types'

import FetchRadioOption from './FormComponents/FetchRadioOption'
import CategoriesSelector from './FormComponents/CategoriesSelector'
import TextSearchInput from './FormComponents/TextSearchInput'

import './FetchForm.scss'

// list of possible joke fetching options
const searchOptions = {
  random: 'Random',
  fromCategories: 'From categories',
  search: 'Search'
}

/**
 * React Component with input form for jokes fetching
 * @param {Object} props
 * @param {function} props.onFetched - callback to be called when joke(s) has been fetched
 */
const FetchForm = ({ onFetched }) => {
  // state for the currently selected joke fetch option
  const [selectedOption, setSelectedOption] = useState(searchOptions.random)

  // stores fetched joke categories
  const [categories, setCategories] = useState([])

  // state for the selected category within CategorySelector
  const [selectedCategory, setSelectedCategory] = useState()

  // state for text search input
  const [textSearchInput, setTextSearchInput] = useState('')

  // fetching joke categories on first render
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(body => setCategories(body))
  }, [])

  // onClick function for the `Get a joke` button
  // fetches jokes according to the selected option and accroding inputs
  const onSubmit = e => {
    e.preventDefault()
    let fetchURL
    if (selectedOption === searchOptions.random) {
      fetchURL = 'https://api.chucknorris.io/jokes/random'
    } else if (selectedOption === searchOptions.fromCategories) {
      if (!selectedCategory) { // aborting, if no category is selected
        return
      }
      fetchURL = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
    } else if (selectedOption === searchOptions.search) {
      if (textSearchInput === '') { // aborting if text search input is empty
        return
      }
      fetchURL = `https://api.chucknorris.io/jokes/search?query=${textSearchInput}`
    } else { // aborting if no fetch options is selected
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
    <form>
      <h3 className='msi-header'>MSI 2020</h3>
      <header className='hey'>Hey!</header>
      <header className='find-header'>Lets try to find a joke for you:</header>

      <FetchRadioOption label='Random'
        onChange={() => setSelectedOption(searchOptions.random)}
        checked={selectedOption === searchOptions.random}
      />

      <FetchRadioOption label='From categories'
        onChange={() => setSelectedOption(searchOptions.fromCategories)}
        checked={selectedOption === searchOptions.fromCategories}
      />
      <CategoriesSelector
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={setSelectedCategory}
        visible={selectedOption === searchOptions.fromCategories}
      />

      <FetchRadioOption label='Search'
        onChange={() => setSelectedOption(searchOptions.search)}
        checked={selectedOption === searchOptions.search}
      />
      <TextSearchInput value={textSearchInput}
        onChange={setTextSearchInput}
        visible={selectedOption === searchOptions.search}
      />

      <button type='submit' onClick={onSubmit} className='submit-button'>Get a joke</button>
    </form>
  )
}
FetchForm.propTypes = {
  onFetched: t.func.isRequired
}

export default FetchForm
