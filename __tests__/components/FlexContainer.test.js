import React from 'react'
import { render } from 'enzyme'

import FlexContainer from '../../components/commons/FlexContainer'

const Test = () => (
  <FlexContainer>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FlexContainer>
)

describe('Component: <FlexContainer />', () => {
  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
