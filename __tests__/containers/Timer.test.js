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
  describe('State Management', () => {
    let wrapper
    let start
    beforeEach(() => {
      wrapper = mount(<Timer {...props} />)
      start = wrapper.find('button.start')
    })
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should update state when onClick: start', () => {
      start.simulate('click')
      expect(wrapper.state('pomodoroState')).toEqual(1)
    })
  })

  describe('Snapshots', () => {})
})
