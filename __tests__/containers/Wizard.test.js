import React from 'react'
import { mount } from 'enzyme'

import Wizard from '../../containers/Wizard'

const initialState = {
  activity: '',
  cooldown: '',
  currentFrame: 1,
  timer: ''
}

const updateState = (state, newState) => ({
  ...state,
  ...newState
})

describe('Container: <Wizard />', () => {
  let wrapper
  let input
  let next
  beforeEach(() => {
    wrapper = mount(<Wizard />)
    input = wrapper.find('input')
    next = wrapper.find('button.next')
  })

  describe('State Management', () => {
    test('1. should find initial state', () => {
      expect(wrapper.state()).toEqual(initialState)
    })
    test('2. should find updated state onChange event for `activity`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      expect(wrapper.state()).toEqual(
        updateState(initialState, { activity: 'coding' })
      )
    })
    test('3. should find updated state onClick event to move to Frame 2', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      expect(wrapper.state()).toEqual(
        updateState(initialState, { activity: 'coding', currentFrame: 2 })
      )
    })
    test('4. should find updated state onChange event for `timer`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      expect(wrapper.state()).toEqual(
        updateState(initialState, {
          activity: 'coding',
          currentFrame: 2,
          timer: '12'
        })
      )
    })
    test('5. should find updated state onClick event to move to Frame 3', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      expect(wrapper.state()).toEqual(
        updateState(initialState, {
          activity: 'coding',
          currentFrame: 3,
          timer: '12'
        })
      )
    })
    test('6. should find updated state onChange event for `cooldown`', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      expect(wrapper.state()).toEqual(
        updateState(initialState, {
          activity: 'coding',
          cooldown: '3',
          currentFrame: 3,
          timer: '12'
        })
      )
    })
    test('7. should find updated state onClick event to move back to Frame 2', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      wrapper.find('button.prev').simulate('click')
      expect(wrapper.state()).toEqual(
        updateState(initialState, {
          activity: 'coding',
          cooldown: '',
          currentFrame: 2,
          timer: '12'
        })
      )
    })
    test('8. should find updated state onClick event to move to Frame 4', () => {
      input.simulate('change', {
        target: { name: 'activity', value: 'coding' }
      })
      next.simulate('click')
      input.simulate('change', { target: { name: 'timer', value: '12' } })
      next.simulate('click')
      input.simulate('change', { target: { name: 'cooldown', value: '3' } })
      next.simulate('click')
      expect(wrapper.state()).toEqual(
        updateState(initialState, {
          activity: 'coding',
          cooldown: '3',
          currentFrame: 4,
          timer: '12'
        })
      )
    })
  })

  describe('Snapshots', () => {
    test('should render without exploding on Frame 1', () => {
      expect(wrapper).toMatchSnapshot()
    })
    test('should render without exploding on Frame 2', () => {
      expect(wrapper.setState({ currentFrame: 2 })).toMatchSnapshot()
    })
    test('should render without exploding on Frame 3', () => {
      expect(wrapper.setState({ currentFrame: 3 })).toMatchSnapshot()
    })
    test('should render without exploding on Timer', () => {
      expect(
        wrapper.setState({
          activity: 'coding',
          cooldown: '3',
          currentFrame: 4,
          timer: '12'
        })
      ).toMatchSnapshot()
    })
  })
})
