import React from 'react'
import { render } from 'enzyme'

import Footer from '../../components/layout/Footer'

const Test = () => (
  <Footer>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Footer>
)

describe('Component: <Footer />', () => {
  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
