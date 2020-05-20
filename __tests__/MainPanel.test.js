import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import MainPanel from '../src/components/MainPanel.jsx'

global.fetch = jest.fn()
global.fetch.mockResolvedValue({
  json: () => ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']
})

const renderMainPanel = async () => {
  let component

  const addFavoriteJoke = jest.fn()
  const removeFavoriteJoke = jest.fn()
  const isJokeFavorite = jest.fn()

  await act(async () => {
    component = mount(
      <MainPanel addFavoriteJoke={addFavoriteJoke}
        removeFavoriteJoke={removeFavoriteJoke}
        isJokeFavorite={isJokeFavorite}
      />
    )
  })

  return {
    component,
    addFavoriteJoke,
    removeFavoriteJoke,
    isJokeFavorite
  }
}

describe('<MainPanel />', () => {
  it('Renders <MainPanel />', async () => {
    const {
      component,
      addFavoriteJoke,
      removeFavoriteJoke,
      isJokeFavorite
    } = await renderMainPanel()

    // fetch is called for joke categories
    expect(fetch).toHaveBeenCalled()
    // main div is rendered
    expect(component.exists('.tablet-main')).toBe(true)
    // no props func's called w/o user actions
    expect(addFavoriteJoke).not.toHaveBeenCalled()
    expect(removeFavoriteJoke).not.toHaveBeenCalled()
    expect(isJokeFavorite).not.toHaveBeenCalled()
  })
})
