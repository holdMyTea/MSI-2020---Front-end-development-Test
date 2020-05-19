import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../src/App.jsx'

configure({ adapter: new Adapter() })

test('Testing tests', () => {
  shallow(<App />)
})
