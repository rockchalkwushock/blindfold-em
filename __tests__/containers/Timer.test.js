import React from 'react'
import moment from 'moment'
import { mount } from 'enzyme'

import Timer, { t } from '../../containers/Timer'

jest.useFakeTimers()

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
    setInterval.mockClear()
  })
  describe('State Management', () => {
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should update state when onClick: start', () => {
      start.simulate('click')
      expect(wrapper.state('timerId')).toEqual(1)
      expect(wrapper.state('timerState')).toEqual(1)
    })
    test('3. should update state when onClick: stop', () => {
      start.simulate('click')
      expect(wrapper.state('timerId')).toEqual(2)
      expect(wrapper.state('timerState')).toEqual(1)
      stop.simulate('click')
      expect(wrapper.state('timerId')).toEqual(null)
      expect(wrapper.state('timerState')).toEqual(0)
    })
    test('4. should update state when onClick: stop', () => {
      wrapper.setState({ cooldownId: 2, cooldownState: t.START })
      expect(wrapper.state('cooldownId')).toEqual(2)
      expect(wrapper.state('cooldownState')).toEqual(1)
      wrapper.find('button.stop').simulate('click')
      expect(wrapper.state('cooldownId')).toEqual(null)
      expect(wrapper.state('cooldownState')).toEqual(0)
    })
    test('5. should tick by 1 second on timer.', () => {
      start.simulate('click')
      expect(setInterval.mock.calls.length).toBe(1)
      expect(setInterval.mock.calls[0][1]).toBe(1000)
      expect(wrapper.state('timerId')).toEqual(3)
      expect(wrapper.state('currentTime').get('minutes')).toEqual(12)
      expect(wrapper.state('currentTime').get('seconds')).toEqual(0)
      jest.runOnlyPendingTimers()
      expect(wrapper.state('currentTime').get('minutes')).toEqual(11)
      expect(wrapper.state('currentTime').get('seconds')).toEqual(59)
    })
    // TODO Check same state of #5 with cooldown timer.
    // QUESTION: Why is jest.advanceTimersBy(ms) not being found?
    // NOTE: jest.runOnlyPendingTimers() will tick by declared ms in setInterval.
    test('6. should run all timers to completion.', () => {
      start.simulate('click')
      expect(setInterval.mock.calls.length).toBe(1)
      expect(setInterval.mock.calls[0][1]).toBe(1000)
      expect(wrapper.state('currentTime').get('minutes')).toEqual(12)
      expect(wrapper.state('currentTime').get('seconds')).toEqual(0)
      expect(wrapper.state('currentCooldown').get('minutes')).toEqual(3)
      expect(wrapper.state('currentCooldown').get('seconds')).toEqual(0)
      jest.runAllTimers()
      expect(wrapper.state('currentTime').get('minutes')).toEqual(0)
      expect(wrapper.state('currentTime').get('seconds')).toEqual(0)
      expect(wrapper.state('currentCooldown').get('minutes')).toEqual(0)
      expect(wrapper.state('currentCooldown').get('seconds')).toEqual(0)
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
