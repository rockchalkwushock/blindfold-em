import React from 'react'
import { mount } from 'enzyme'

import Main from '../../components/layout/Main'

const Test = () => (
  <Main>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Main>
)

describe('Component: <Main />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
