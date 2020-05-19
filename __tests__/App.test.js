import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils'

import App from '../src/App.jsx'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('Renders two panels within <App />', async () => {
    global.fetch = jest.fn()
    global.fetch.mockResolvedValue({
      json: () => ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']
    })

    // jest.useFakeTimers()

    await act(async () => { mount(<App />) })

    // act(() => {
    //   jest.runAllImmediates()
    // })

    expect(fetch).toHaveBeenCalled()
  })
})
