import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import App from '../src/App'

import { fetch, mockJokeFetching } from './mocks/functionMocks'

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

  it('Likes a fetched joke and displays it in fav-bar', async () => {
    mockJokeFetching()

    // Clicking `Get a joke` button
    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })
    component.update()

    // fav-bar is still empty
    expect(component.find('.fav-bar-container > Joke')).toHaveProperty('length', 0)

    // fetched joke appears on the page, and is not liked
    const fetchedJokes = component.find('div.fetch-results > Joke')
    expect(fetchedJokes).toHaveProperty('length', 1)
    expect(fetchedJokes.first().prop('isFavorite')).toBe(false)

    // liking the joke
    fetchedJokes.first().find('.joke-favorite-container > img').simulate('click')

    // joke appears on the fav bar
    expect(component.find('.fav-bar-container > Joke')).toHaveProperty('length', 1)
    // joke status is updated
    expect(component.find('div.fetch-results > Joke').first().prop('isFavorite')).toBe(true)
  })

  it('Dislikes a fetched joke and removes it from fav-bar', async () => {
    await mountComponent()

    mockJokeFetching()

    // Clicking `Get a joke` button
    await act(async () => {
      component.find('button.submit-button').first().simulate('click')
    })
    component.update()

    // fetched joke appears on the page, and is not liked
    const fetchedJokes = component.find('div.fetch-results > Joke')
    expect(fetchedJokes).not.toHaveProperty('length', 0)
    expect(fetchedJokes.first().prop('isFavorite')).toBe(false)
    // console.log(fetchedJokes.first().debug())

    const initialLikedJokesCount = component.find('.fav-bar-container > Joke').length

    // liking the joke
    fetchedJokes.first().find('.joke-favorite-container > img').simulate('click')

    // joke appears on the fav bar
    const favBarJokes = component.find('.fav-bar-container > Joke')
    expect(favBarJokes).toHaveProperty('length', initialLikedJokesCount + 1)
    // joke status is updated
    expect(component.find('div.fetch-results > Joke').first().prop('isFavorite')).toBe(true)

    // disliking the joke
    favBarJokes.at(initialLikedJokesCount).find('.joke-favorite-container > img').simulate('click')
    // the joke is removed from the fav bar
    expect(component.find('.fav-bar-container > Joke')).toHaveProperty('length', initialLikedJokesCount)
    // staus of the joke on the MainPanle is changed back to unliked
    expect(component.find('div.fetch-results > Joke').first().prop('isFavorite')).toBe(false)
  })
})
