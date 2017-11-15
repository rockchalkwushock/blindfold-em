import React from 'react'
import { render } from 'enzyme'

import Header from '../../components/layout/Header'

const Test = () => (
  <Header>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Header>
)

describe('Component: <Header />', () => {
  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
