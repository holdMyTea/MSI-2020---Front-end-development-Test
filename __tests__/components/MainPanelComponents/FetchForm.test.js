import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import FetchForm from '../../../src/components/MainPanelComponents/FetchForm'

const categories = ['animal', 'career', 'celebrity']

global.fetch = jest.fn()
global.fetch.mockResolvedValue({
  json: () => categories
})

const onFetched = jest.fn()

let component

const mountComponent = async () => act(
  async () => {
    component = mount(
      <FetchForm onFetched={onFetched} />
    )
  }
)

describe('<FetchForm />', () => {
  beforeAll(mountComponent)

  beforeEach(() => {
    global.fetch.mockClear()
    onFetched.mockClear()
  })

  it('Renders <FetchForm />', async () => {
    await mountComponent()
    // fetch is called for joke categories
    expect(fetch).toHaveBeenCalled()
    // form is rendered
    expect(component.exists('form')).toBe(true)
    // props func's not called w/o user actions
    expect(onFetched).not.toHaveBeenCalled()
  })

  it('Switches selected FetchOption on click', () => {
    let options = component.find('label.search-option > input')
    expect(options).toHaveProperty('length', 3)

    // 'Random' option is selected by default
    expect(options.at(0).prop('checked')).toBe(true)
    expect(options.at(1).prop('checked')).toBe(false)
    expect(options.at(2).prop('checked')).toBe(false)

    // selecting another one
    options.at(1).find('input').simulate('change', {
      target: { value: options.at(1).prop('label') }
    })

    // finding updated options
    options = component.find('label.search-option > input')
    // verifying updated selection
    expect(options.at(0).prop('checked')).toBe(false)
    expect(options.at(1).prop('checked')).toBe(true)
    expect(options.at(2).prop('checked')).toBe(false)
  })

  it('Shows categories selector when `From categories` is selected', async () => {
    await mountComponent()
    expect(component.find('.visible-category-container')).toHaveProperty('length', 0)

    // selecting the `From categories` option
    const fromCategoriesOption = component.find('label.search-option').at(1)
    fromCategoriesOption.find('input').simulate('change', {
      target: { value: fromCategoriesOption.prop('label') }
    })

    expect(component.find('.visible-category-container')).toHaveProperty('length', 1)
  })

  it('Shows search input when `Search` is selected', () => {
    expect(component.find('.visible-search-input').first()).toHaveProperty('length', 0)

    // selecting the `Search` option
    const searchOption = component.find('label.search-option').at(2)
    searchOption.find('input').simulate('change', {
      target: { value: searchOption.prop('label') }
    })

    expect(component.find('.visible-search-input').first()).toHaveProperty('length', 1)
  })

  it('Fetches random joke', async () => {
    await mountComponent()
    fetch.mockClear()

    global.fetch.mockResolvedValueOnce({
      json: () => ({ key: 'value' })
    })

    component.find('button').first().simulate('click')

    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenLastCalledWith('https://api.chucknorris.io/jokes/random')
  })

  it('Fetches joke with selected category', () => {
    // selecting the `From categories` option
    const fromCategoriesOption = component.find('label.search-option').at(1)
    fromCategoriesOption.find('input').simulate('change', {
      target: { value: fromCategoriesOption.prop('label') }
    })

    const selectedCategoryIndex = 1
    component.find('.visible-category-container').first()
      .childAt(selectedCategoryIndex).simulate('click')

    component.find('button').first().simulate('click')

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenLastCalledWith(
      `https://api.chucknorris.io/jokes/random?category=${categories[selectedCategoryIndex]}`
    )
  })

  it('Doesn\'t fetch joke if category is not selected', async () => {
    await mountComponent()
    fetch.mockClear()
    // selecting the `From categories` option
    const fromCategoriesOption = component.find('label.search-option').at(1)
    fromCategoriesOption.find('input').simulate('change', {
      target: { value: fromCategoriesOption.prop('label') }
    })

    component.find('button').first().simulate('click')

    expect(fetch).not.toHaveBeenCalled()
  })

  it('Fetches jokes by search', () => {
    // selecting the `Search` option
    const searchOption = component.find('label.search-option').at(2)
    searchOption.find('input').simulate('change', {
      target: { value: searchOption.prop('label') }
    })

    // adding input to search
    const sampleText = 'text'
    component.find('.visible-search-input').first().simulate('change', {
      target: { value: sampleText }
    })

    component.find('button').first().simulate('click')

    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenLastCalledWith(
      `https://api.chucknorris.io/jokes/search?query=${sampleText}`
    )
  })

  it('Doesn\'t fetch if search input is empty', async () => {
    await mountComponent()
    fetch.mockClear()
    // selecting the `Search` option
    const searchOption = component.find('label.search-option').at(2)
    searchOption.find('input').simulate('change', {
      target: { value: searchOption.prop('label') }
    })

    component.find('button').first().simulate('click')

    expect(fetch).not.toHaveBeenCalled()
  })
})
