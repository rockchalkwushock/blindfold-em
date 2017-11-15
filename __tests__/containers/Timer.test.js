import React from 'react'
import moment from 'moment'
import { mount } from 'enzyme'

import Timer, { t } from '../../containers/Timer'

const initialState = {
  baseTime: moment.duration(parseInt('12', 10), 'minutes'),
  currentTime: moment.duration(parseInt('12', 10), 'minutes'),
  cooldown: moment.duration(parseInt('3', 10), 'minutes'),
  pomodoro: null,
  pomodoroState: t.STOPPED
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
  let pause
  let start
  let stop
  beforeEach(() => {
    wrapper = mount(<Timer {...props} />)
    pause = wrapper.find('button.pause')
    start = wrapper.find('button.start')
    stop = wrapper.find('button.stop')
  })
  describe('State Management', () => {
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should update state when onClick: start', () => {
      start.simulate('click')
      expect(wrapper.state('pomodoroState')).toEqual(1)
    })
    test('3. should update state when onClick: stop', () => {
      start.simulate('click')
      expect(wrapper.state('pomodoroState')).toEqual(1)
      stop.simulate('click')
      expect(wrapper.state('pomodoroState')).toEqual(0)
    })
  })

  describe('Button States', () => {
    test('should see "Stop" button as disabled', () => {
      expect(start.props().disabled).toEqual(false)
      expect(pause.props().disabled).toEqual(false)
      expect(stop.props().disabled).toEqual(true)
    })
    test('should see "Start" button as disabled', () => {
      wrapper.setState({ pomodoroState: t.START })
      expect(wrapper.find('button.start').props().disabled).toEqual(true)
      expect(wrapper.find('button.pause').props().disabled).toEqual(false)
      expect(wrapper.find('button.stop').props().disabled).toEqual(false)
    })
    test.skip('should see "Pause" button as disabled', () => {
      wrapper.setState({ pomodoroState: t.PAUSED })
      expect(wrapper.find('button.start').props().disabled).toEqual(false)
      expect(wrapper.find('button.pause').props().disabled).toEqual(true)
      expect(wrapper.find('button.stop').props().disabled).toEqual(false)
    })
  })

  describe('Snapshots', () => {})
})