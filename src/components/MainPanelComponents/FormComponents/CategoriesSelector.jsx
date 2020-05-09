import React from 'react'
import t from 'prop-types'

import './CategoriesSelector.css'

/**
 * React Component displaying a single category view
 * @param {Object} props
 * @param {string} props.name - name of the category
 * @param {boolean} props.selected - if this category is currently selected
 * @param {function} props.onClick - callback when the category is clicked
 */
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

/**
 * React Component rendering a container with a list of categories with radio selection
 * @param {Object} props
 * @param {string[]} props.categories - array of categories
 * @param {string} [props.selectedCategory] - name of the currently selected category
 * @param {function} props.onCategoryClick - callback when any of the categories is clicked, will be called with category name as arg
 * @param {boolean} props.visible - whether the Component should be visible
 */
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
  categories: t.arrayOf(t.string).isRequired,
  selectedCategory: t.string,
  onCategoryClick: t.func.isRequired,
  visible: t.bool.isRequired
}

export default CategoriesSelector
