import React from 'react'
import { render } from 'enzyme'

import Frame from '../../components/commons/Frame'

const Test = () => (
  <Frame
    name="activity"
    fn={() => {}}
    text="What activity are you working on?"
    value=""
  />
)

describe('Component: <Frame />', () => {
  test('should render matching text for <h2/>', () => {
    const tree = render(<Test />)
    expect(tree.text()).toEqual('What activity are you working on?')
  })

  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
