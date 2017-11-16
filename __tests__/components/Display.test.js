import React from 'react'
import { render } from 'enzyme'

import Display from '../../components/commons/Display'

const props = {
  activity: 'coding',
  baseCool: '0:03:00',
  baseTime: '0:12:00',
  condition: null,
  currCool: '0:03:00',
  currTime: '0:12:00'
}

describe('Component: <Display />', () => {
  test('should render without exploding as <TimerDisplay /> ', () => {
    const tree = render(<Display {...props} />)
    expect(tree).toMatchSnapshot()
  })
  test('should render without exploding as <CoolDownDisplay /> ', () => {
    const tree = render(<Display {...props} condition={2} />)
    expect(tree).toMatchSnapshot()
  })
})
