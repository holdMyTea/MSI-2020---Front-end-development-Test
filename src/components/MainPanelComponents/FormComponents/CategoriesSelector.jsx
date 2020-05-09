import React from 'react'
import t from 'prop-types'

import './CategoriesSelector.css'

const Category = ({ name, selected, onClick }) => (
  <label onClick={onClick} style={{
    backgroundColor: selected ? '#F8F8F8' : 'white',
    color: selected ? '#333' : '#ABABAB'
  }}>
    {name}
  </label>
)
Category.propTypes = {
  name: t.string.isRequired,
  selected: t.bool.isRequired,
  onClick: t.func.isRequired
}

const CategoriesSelector = ({ categories, selectedCategory, onCategoryClick, visible }) => (
  <div className={`categories-container ${visible ? 'visible-category-container' : ''}`}>
    {
      categories.map(category => (
        <Category key={category}
          name={category}
          selected={category === selectedCategory}
          onClick={() => onCategoryClick(category)}
        />
      ))
    }
  </div>
)
CategoriesSelector.propTypes = {
  categories: t.arrayOf(t.string),
  selectedCategory: t.string,
  onCategoryClick: t.func.isRequired,
  visible: t.bool.isRequired
}

export default CategoriesSelector
