import React from 'react'
import { mount } from 'enzyme'

import Header from '../../components/layout/Header'

const Test = () => (
  <Header>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Header>
)

describe('Component: <Header />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
