import React from 'react'
import { mount } from 'enzyme'

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
  test('should mount without exploding as <TimerDisplay /> ', () => {
    const tree = mount(<Display {...props} />)
    expect(tree).toMatchSnapshot()
  })
  test('should mount without exploding as <CoolDownDisplay /> ', () => {
    const tree = mount(<Display {...props} condition={2} />)
    expect(tree).toMatchSnapshot()
  })
})
