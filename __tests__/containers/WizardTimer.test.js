import React from 'react'
import { mount } from 'enzyme'
import moment from 'moment'

import WizardTimer from '../../containers/WizardTimer'
import { timerState as t } from '../../lib'

jest.useFakeTimers()

const initialState = {
  completed: false,
  cooldown: {
    base: null,
    current: null,
    duration: null,
    id: null,
    status: t.STOPPED
  },
  errors: {
    activity: '',
    cooldown: '',
    timer: ''
  },
  form: {
    activity: '',
    cooldown: '',
    currentFrame: 1,
    timer: ''
  },
  timer: {
    base: null,
    current: null,
    duration: null,
    id: null,
    status: t.STOPPED
  }
}

describe('Container: <WizardTimer />', () => {
  let wrapper
  let input
  let next
  beforeEach(() => {
    wrapper = mount(<WizardTimer />)
    input = wrapper.find('input')
    next = wrapper.find('button')
  })

  describe('Form State Management', () => {
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should find updated state onChange event for `activity`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      expect(wrapper.state('form')).toHaveProperty('activity', 'coding')
    })
    test('3. should find updated state onClick event to move to Frame 2', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 2)
    })
    test('4. should find updated state onChange event for `timer`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      expect(wrapper.state('form')).toHaveProperty('timer', '12')
      expect(wrapper.state('timer')).toHaveProperty(
        'base',
        moment.duration(parseInt('12', 10), 'minutes')
      )
      expect(wrapper.state('timer')).toHaveProperty(
        'current',
        moment.duration(parseInt('12', 10), 'minutes')
      )
    })
    test('5. should find updated state onClick event to move to Frame 3', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 3)
    })
    test('6. should find updated state onChange event for `cooldown`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      expect(wrapper.state('form')).toHaveProperty('cooldown', '3')
      expect(wrapper.state('cooldown')).toHaveProperty(
        'base',
        moment.duration(parseInt('3', 10), 'minutes')
      )
      expect(wrapper.state('cooldown')).toHaveProperty(
        'current',
        moment.duration(parseInt('3', 10), 'minutes')
      )
    })
    test('7. should find updated state onClick event to move to Frame 4', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 4)
    })
    test('8. should find error on no input: Frame 1', () => {
      input.simulate('change', {
        target: { name: 'activity', value: '' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 1)
      expect(wrapper.state('errors')).toHaveProperty(
        'activity',
        'You must submit an activity.'
      )
    })
    test('9. should find error on invalid input: Frame 1', () => {
      input.simulate('change', {
        target: { name: 'activity', value: '@$$' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 1)
      expect(wrapper.state('form')).toHaveProperty('activity', '@$$')
      expect(wrapper.state('errors')).toHaveProperty(
        'activity',
        "@$$ is not a valid input. Please stick too: lower & upper case characters, numbers, and (.!,')."
      )
    })
    test('10. should find error on no input: Frame 2', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'timer', value: '' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 2)
      expect(wrapper.state('errors')).toHaveProperty(
        'timer',
        'You must submit a timer for the activity.'
      )
    })
    test('11. should find error on invalid input: Frame 2', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'timer', value: 'abc' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 2)
      expect(wrapper.state('form')).toHaveProperty('timer', 'abc')
      expect(wrapper.state('errors')).toHaveProperty(
        'timer',
        'abc is not a valid input. Please only submit number values.'
      )
    })
    test('12. should find error on no input: Frame 3', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'timer', value: '12' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'coding', value: '' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 3)
      expect(wrapper.state('errors')).toHaveProperty(
        'cooldown',
        'You must submit a cooldown for the activity.'
      )
    })
    test('13. should find error on invalid input: Frame 3', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'timer', value: '12' }
      })
      next.simulate('click')
      input.simulate('change', {
        target: { name: 'cooldown', value: 'abc' }
      })
      next.simulate('click')
      expect(wrapper.state('form')).toHaveProperty('currentFrame', 3)
      expect(wrapper.state('form')).toHaveProperty('cooldown', 'abc')
      expect(wrapper.state('errors')).toHaveProperty(
        'cooldown',
        'abc is not a valid input. Please only submit number values.'
      )
    })
  })

  describe('Timer State Management', () => {
    test('1. should find updated state onClick event to start Timer', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(1)
      expect(wrapper.state('timer').status).toEqual(1)
      expect(wrapper.find('Text').props()).toHaveProperty('time', '0:11:59')
    })
    test('2. should find updated state onClick event to stop Timer', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(2)
      expect(wrapper.state('timer').status).toEqual(1)
      expect(wrapper.find('Text').props()).toHaveProperty('time', '0:11:59')
      wrapper.find('rect').simulate('click')
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.find('Play')).toBeDefined()
    })
    test('3. should find updated state on Timer completion leading to Cooldown start', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      expect(wrapper.state('timer').id).toEqual(3)
      expect(wrapper.state('timer').status).toEqual(1)
      wrapper.setState({
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.state('cooldown').id).toEqual(4)
      expect(wrapper.state('cooldown').status).toEqual(1)
      expect(wrapper.find('Text').props()).toHaveProperty('time', '0:03:00')
    })
    test('4. should find updated state on Cooldown start', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      expect(wrapper.state('timer').id).toEqual(5)
      expect(wrapper.state('timer').status).toEqual(1)
      wrapper.setState({
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.state('cooldown').id).toEqual(6)
      expect(wrapper.state('cooldown').status).toEqual(1)
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.find('Text').props()).toHaveProperty('time', '0:02:59')
    })
    test('5. should find updated state onClick event to stop Cooldown', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      expect(wrapper.state('timer').id).toEqual(7)
      expect(wrapper.state('timer').status).toEqual(1)
      wrapper.setState({
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.state('cooldown').id).toEqual(8)
      expect(wrapper.state('cooldown').status).toEqual(1)
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.find('Text').props()).toHaveProperty('time', '0:02:59')
      wrapper.find('rect').simulate('click')
      expect(wrapper.state('cooldown').id).toEqual(null)
      expect(wrapper.state('cooldown').status).toEqual(0)
      expect(wrapper.find('Play')).toBeDefined()
    })
    test('6. should find updated state on Cooldown completion leading to Completed View', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      expect(wrapper.state('timer').id).toEqual(9)
      expect(wrapper.state('timer').status).toEqual(1)
      wrapper.setState({
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.state('cooldown').id).toEqual(10)
      expect(wrapper.state('cooldown').status).toEqual(1)
      wrapper.setState({
        cooldown: {
          ...wrapper.state('cooldown'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('completed')).toEqual(true)
      expect(wrapper.state('cooldown').id).toEqual(null)
      expect(wrapper.state('cooldown').status).toEqual(0)
    })
    test('7. should find updated state onClick event to reset application', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      wrapper.find('polygon').simulate('click')
      expect(wrapper.state('timer').id).toEqual(11)
      expect(wrapper.state('timer').status).toEqual(1)
      wrapper.setState({
        timer: {
          ...wrapper.state('timer'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('timer').id).toEqual(null)
      expect(wrapper.state('timer').status).toEqual(0)
      expect(wrapper.state('cooldown').id).toEqual(12)
      expect(wrapper.state('cooldown').status).toEqual(1)
      wrapper.setState({
        cooldown: {
          ...wrapper.state('cooldown'),
          current: moment.duration(parseInt('0:00:01', 10), 'minutes')
        }
      })
      jest.runOnlyPendingTimers()
      wrapper.update()
      expect(wrapper.state('completed')).toEqual(true)
      expect(wrapper.state('cooldown').id).toEqual(null)
      expect(wrapper.state('cooldown').status).toEqual(0)
      wrapper.find('Button').simulate('click')
      expect(wrapper.state('form')).toEqual({
        activity: '',
        cooldown: '',
        currentFrame: 1,
        timer: ''
      })
    })
  })
})
