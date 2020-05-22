import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import CategoriesSelector from '../../../../src/components/MainPanelComponents/FormComponents/CategoriesSelector'

const categories = ['Category1', 'TestCategory2', '1o2iw01js1i0']

let component

const onCategoryClick = jest.fn()

describe('<CategoriesSelector />', () => {
  beforeAll(async () =>
    act(async () => {
      component = mount(
        <CategoriesSelector
          categories={categories}
          onCategoryClick={onCategoryClick}
          visible
        />
      )
    })
  )

  it('Renders all provided categories', async () => {
    const renderedCategories = component.find('div.categories-container').children()

    expect(renderedCategories).toHaveProperty('length', categories.length)

    renderedCategories.forEach((child, index) => {
      expect(child.text()).toEqual(categories[index])
    })
  })

  it('Calls `onCategory` click with the name of category as param', async () => {
    const categoryIndex = 2
    await act(async () => {
      component.find('label').at(categoryIndex).simulate('click')
    })

    expect(onCategoryClick).toHaveBeenCalledTimes(1)
    expect(onCategoryClick).toHaveBeenCalledWith(categories[categoryIndex])
  })

  it('Passes `selected` property to the correct category', async () => {
    const selectedCategoryIndex = 1
    component.setProps({
      categories,
      onCategoryClick,
      visible: true,
      selectedCategory: categories[selectedCategoryIndex]
    })

    component.find('div.categories-container').children().forEach(
      (child, index) => {
        expect(child.prop('selected')).toEqual(index === selectedCategoryIndex)
      }
    )
  })
})
