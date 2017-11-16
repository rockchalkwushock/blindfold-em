import React from 'react'
import { mount } from 'enzyme'

import FlexContainer from '../../components/commons/FlexContainer'

const Test = () => (
  <FlexContainer>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FlexContainer>
)

describe('Component: <FlexContainer />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
