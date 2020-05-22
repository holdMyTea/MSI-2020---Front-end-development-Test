import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import App from '../src/App'

import { fetch } from './mocks/functionMocks'

global.fetch = fetch

let component

const mountComponent = async () => act(
  async () => {
    component = mount(
      <App />
    )
  }
)

describe('<App />', () => {
  beforeAll(mountComponent)

  beforeEach(() => {
    fetch.mockClear()
  })

  it('Renders <App />', async () => {
    await mountComponent()

    // Confirming categories were fetched on first render
    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenCalledWith('https://api.chucknorris.io/jokes/categories')

    // MainPanel is rendered
    expect(component.find('main')).toHaveProperty('length', 1)
    // FavoritePanel is rendered
    expect(component.find('div.fav-bar')).toHaveProperty('length', 1)
  })
})
