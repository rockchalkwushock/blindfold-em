import React from 'react'
import { render } from 'enzyme'

import SubTitle from '../../components/commons/SubTitle'

const Test = () => <SubTitle text="What activity are you working on?" />

describe('Component: <SubTitle />', () => {
  test('should render matching text for <h2/>', () => {
    const tree = render(<Test />)
    expect(tree.text()).toEqual('What activity are you working on?')
  })

  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
