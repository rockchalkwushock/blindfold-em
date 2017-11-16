import React from 'react'
import { mount } from 'enzyme'

import Footer from '../../components/layout/Footer'

const Test = () => (
  <Footer>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Footer>
)

describe('Component: <Footer />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
