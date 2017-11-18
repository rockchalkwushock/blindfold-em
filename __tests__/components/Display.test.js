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
  let wrapper
  describe('<TimerDisplay />', () => {
    beforeEach(() => {
      wrapper = mount(<Display {...props} />)
    })
    test('1. should mount', () => {
      expect(wrapper.find('TimerDisplay')).toBeDefined()
    })

    test('2. should update time in view on props change', () => {
      wrapper.setProps({
        currTime: '0:11:59'
      })
      expect(wrapper.find('TimerDisplay').props()).toHaveProperty(
        'current',
        '0:11:59'
      )
    })
  })
  describe('<CoolDownDisplay />', () => {
    beforeEach(() => {
      wrapper = mount(<Display {...props} condition={2} />)
    })
    test('1. should mount', () => {
      expect(wrapper.find('CoolDownDisplay')).toBeDefined()
    })

    test('2. should update time in view on props change', () => {
      wrapper.setProps({
        currCool: '0:02:59'
      })
      expect(wrapper.find('CoolDownDisplay').props()).toHaveProperty(
        'current',
        '0:02:59'
      )
    })
  })
})
