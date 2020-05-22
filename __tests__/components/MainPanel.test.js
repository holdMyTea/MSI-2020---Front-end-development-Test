import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import MainPanel from '../../src/components/MainPanel.jsx'

let component

const addFavoriteJoke = jest.fn()
const removeFavoriteJoke = jest.fn()
const isJokeFavorite = jest.fn()

// by default all jokes are not liked
isJokeFavorite.mockImplementation(() => false)

const renderMainPanel = async () =>
  act(async () => {
    component = mount(
      <MainPanel addFavoriteJoke={addFavoriteJoke}
        removeFavoriteJoke={removeFavoriteJoke}
        isJokeFavorite={isJokeFavorite}
      />
    )
  })

global.fetch = jest.fn()
global.fetch.mockResolvedValue({
  json: () => ['animal', 'career', 'celebrity', 'dev']
})

const mockJokeFetching = (numberOfJokes = 1) => {
  if (numberOfJokes === 1) {
    global.fetch.mockResolvedValueOnce({
      json: () => ({
        categories: [],
        created_at: '2020-01-05 13:42:22.980058',
        id: 'QP_esj66TTiqH5m4NTPglg',
        updated_at: '2020-01-05 13:42:22.980058',
        value: 'Chuck Norris once made a cannibal eat a bowl of creamed asparagus soup.'
      })
    })
  } else {
    const mockedJokes = new Array(numberOfJokes).fill(0).map((v, i) => ({
      categories: [],
      created_at: '2020-01-05 13:42:22.980058',
      id: 'sampleId' + i,
      updated_at: '2020-01-05 13:42:22.980058',
      value: 'Chuck Norris once made a cannibal eat a bowl of creamed asparagus soup.'
    }))
    global.fetch.mockResolvedValueOnce({
      json: () => ({
        total: numberOfJokes,
        result: mockedJokes
      })
    })
  }
}

describe('<MainPanel />', () => {
  beforeAll(renderMainPanel)

  beforeEach(() => {
    addFavoriteJoke.mockClear()
    removeFavoriteJoke.mockClear()
    isJokeFavorite.mockClear()
    global.fetch.mockClear()
  })

  it('Renders <MainPanel />', async () => {
    await renderMainPanel()
    // fetch is called for joke categories
    expect(fetch).toHaveBeenCalled()
    // main div is rendered
    expect(component.exists('main')).toBe(true)
    // no props func's called w/o user actions
    expect(addFavoriteJoke).not.toHaveBeenCalled()
    expect(removeFavoriteJoke).not.toHaveBeenCalled()
    expect(isJokeFavorite).not.toHaveBeenCalled()
  })

  it('Displays fetched joke under the form', async () => {
    mockJokeFetching()

    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })

    // syncing wrapper with React tree
    component.update()

    expect(
      component.find('div.fetch-results').first().children()
    ).toHaveProperty('length', 1)
  })

  it('Displays multiple jokes under the form', async () => {
    const numberOfJokes = 3
    mockJokeFetching(numberOfJokes)

    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })

    // syncing wrapper with React tree
    component.update()

    expect(
      component.find('div.fetch-results').first().children()
    ).toHaveProperty('length', numberOfJokes)
  })

  it('Calls `addFavoriteJoke` when clicked on heart on an unliked joke', async () => {
    mockJokeFetching()

    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })

    // syncing wrapper with React tree
    component.update()

    await act(async () => {
      component.find('.joke-favorite-container > img').simulate('click')
    })

    expect(addFavoriteJoke).toHaveBeenCalled()
  })

  it('Calls `removeFavoriteJoke` when clicked on heart on a liked joke', async () => {
    mockJokeFetching()

    isJokeFavorite.mockImplementationOnce(() => true)

    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })

    // syncing wrapper with React tree
    component.update()

    await act(async () => {
      component.find('.joke-favorite-container > img').simulate('click')
    })

    expect(removeFavoriteJoke).toHaveBeenCalled()
  })
})
