import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import CategoriesSelector from '../../../src/components/MainPanelComponents/FormComponents/CategoriesSelector'

const renderCategoriesSelector = async (categories, selectedCategory) => {
  let component

  const onCategoryClick = jest.fn()

  await act(async () => {
    component = mount(
      <CategoriesSelector
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryClick}
        visible
      />
    )
  })

  return {
    component,
    onCategoryClick
  }
}

describe('<CategoriesSelector />', () => {
  it('Renders all provided categories', async () => {
    const categories = ['Category1', 'TestCategory2', '1o2iw01js1i0']

    const { component } = await renderCategoriesSelector(categories)

    const renderedCategories = component.find('div.categories-container').children()

    expect(renderedCategories).toHaveProperty('length', categories.length)

    renderedCategories.forEach((child, index) => {
      expect(child.text()).toEqual(categories[index])
    })
  })

  it('Calls `onCategory` click with the name of category as param', async () => {
    const categories = ['Category1', 'TestCategory2', '1o2iw01js1i0']

    const { component, onCategoryClick } = await renderCategoriesSelector(categories)

    const categoryIndex = 2
    await act(async () => {
      component.find('label').at(categoryIndex).simulate('click')
    })

    expect(onCategoryClick).toHaveBeenCalledTimes(1)
    expect(onCategoryClick).toHaveBeenCalledWith(categories[categoryIndex])
  })

  it('Passes `selected` property to the correct category', async () => {
    const categories = ['Category1', 'TestCategory2', '1o2iw01js1i0']

    const selectedCategoryIndex = 1
    const { component } = await renderCategoriesSelector(categories, categories[selectedCategoryIndex])

    const renderedCategories = component.find('div.categories-container').children()
    renderedCategories.forEach((child, index) => {
      expect(child.prop('selected')).toEqual(index === selectedCategoryIndex)
    })
  })
})
