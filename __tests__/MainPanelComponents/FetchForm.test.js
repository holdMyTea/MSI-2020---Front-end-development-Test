import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import FetchForm from '../../src/components/MainPanelComponents/FetchForm'

global.fetch = jest.fn()
global.fetch.mockResolvedValue({
  json: () => ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']
})

const renderFetchForm = async () => {
  let component

  const onFetched = jest.fn()

  await act(async () => {
    component = mount(
      <FetchForm onFetched={onFetched} />
    )
  })

  return {
    component,
    onFetched
  }
}

describe('<FetchForm />', () => {
  it('Renders <FetchForm />', async () => {
    const {
      component,
      onFetched
    } = await renderFetchForm()

    // fetch is called for joke categories
    expect(fetch).toHaveBeenCalled()
    // form is rendered
    expect(component.exists('form')).toBe(true)
    // props func's not called w/o user actions
    expect(onFetched).not.toHaveBeenCalled()
  })

  it('Hides categories by default, and displays them when "From categories" is selected', async () => {
    const {
      component,
      onFetched
    } = await renderFetchForm()
  })
})
