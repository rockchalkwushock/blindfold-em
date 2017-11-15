import React from 'react'
import { render } from 'enzyme'

import Main from '../../components/layout/Main'

const Test = () => (
  <Main>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Main>
)

describe('Component: <Main />', () => {
  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
