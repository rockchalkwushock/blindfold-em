import React from 'react'
import moment from 'moment'
import { mount } from 'enzyme'

import Timer, { t } from '../../containers/Timer'

const initialState = {
  baseCooldown: moment.duration(parseInt('3', 10), 'minutes'),
  baseTime: moment.duration(parseInt('12', 10), 'minutes'),
  cooldownId: null,
  cooldownState: t.STOPPED,
  currentCooldown: moment.duration(parseInt('3', 10), 'minutes'),
  currentTime: moment.duration(parseInt('12', 10), 'minutes'),
  timerId: null,
  timerState: t.STOPPED
}

const props = {
  activity: 'Coding',
  cooldown: '3',
  timer: '12'
}

// const updateState = (state, newState) => ({
//   ...state,
//   ...newState
// })

describe('Container: <Timer />', () => {
  let wrapper
  let start
  let stop
  beforeEach(() => {
    wrapper = mount(<Timer {...props} />)
    start = wrapper.find('button.start')
    stop = wrapper.find('button.stop')
  })
  describe('State Management', () => {
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should update state when onClick: start', () => {
      start.simulate('click')
      expect(wrapper.state('timerState')).toEqual(1)
    })
    test('3. should update state when onClick: stop', () => {
      start.simulate('click')
      expect(wrapper.state('timerState')).toEqual(1)
      stop.simulate('click')
      expect(wrapper.state('timerState')).toEqual(0)
    })
  })

  describe.skip('Button States', () => {
    test('should see "Stop" button as disabled', () => {
      expect(start.props().disabled).toEqual(false)
      expect(stop.props().disabled).toEqual(true)
    })
    test('should see "Start" button as disabled', () => {
      wrapper.setState({ pomodoroState: t.START })
      expect(wrapper.find('button.start').props().disabled).toEqual(true)
      expect(wrapper.find('button.stop').props().disabled).toEqual(false)
    })
  })

  describe('Snapshots', () => {})
})
