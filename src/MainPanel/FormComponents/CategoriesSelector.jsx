import React from 'react'

import './CategoriesSelector.css'

const Category = ({ label }) => {
  const id = `category-check-${label}`
  return (
    <span>
      <input type="checkbox" name="fetch-categories" id={id} />
      <label htmlFor={id}>{label}</label>
    </span>
  )
}

const CategoriesSelector = () => (
  <div className="categories-container">
    <Category label={'Animals'} />
    <Category label={'Career'} />
    <Category label={'Celebrity'} />
    <Category label={'Dev'} />
  </div>
)

export default CategoriesSelector
