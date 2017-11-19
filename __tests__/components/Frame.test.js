import React from 'react'
import { mount } from 'enzyme'

import Frame from '../../components/commons/Frame'
import { mockTestFn } from '../../lib'

describe('Component: <Frame />', () => {
  let wrapper
  describe('Frame 1:', () => {
    beforeEach(() => {
      wrapper = mount(
        <Frame
          error=""
          fn={mockTestFn}
          name="activity"
          next={mockTestFn}
          msg="Avoiding work"
          text="What activity are you working on?"
          value=""
        />
      )
    })

    test('1. should mount with initial props', () => {
      expect(wrapper.props()).toHaveProperty('error', '')
      expect(wrapper.props()).toHaveProperty('name', 'activity')
      expect(wrapper.props()).toHaveProperty(
        'text',
        'What activity are you working on?'
      )
      expect(wrapper.props()).toHaveProperty('value', '')
    })

    test('2. should throw error on no input', () => {
      wrapper.setProps({
        error: 'You must submit an activity.'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        'You must submit an activity.'
      )
    })

    test('3. should throw error on invalid input', () => {
      wrapper.setProps({
        error:
          "@$$ is not a valid input. Please stick too: lower & upper case characters, numbers, and (.!,')",
        value: '@$$'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        "@$$ is not a valid input. Please stick too: lower & upper case characters, numbers, and (.!,')"
      )
      expect(wrapper.props()).toHaveProperty('value', '@$$')
    })
  })
  describe('Frame 2:', () => {
    beforeEach(() => {
      wrapper = mount(
        <Frame
          error=""
          fn={mockTestFn}
          name="timer"
          next={mockTestFn}
          msg="60 - units are in minutes"
          text="How long should the timer be?"
          value=""
        />
      )
    })

    test('1. should mount with initial props', () => {
      expect(wrapper.props()).toHaveProperty('error', '')
      expect(wrapper.props()).toHaveProperty('name', 'timer')
      expect(wrapper.props()).toHaveProperty(
        'text',
        'How long should the timer be?'
      )
      expect(wrapper.props()).toHaveProperty('value', '')
    })

    test('2. should throw error on no input', () => {
      wrapper.setProps({
        error: 'You must submit a timer for the activity.'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        'You must submit a timer for the activity.'
      )
    })

    test('3. should throw error on invalid input', () => {
      wrapper.setProps({
        error: 'abc is not a valid input. Please only submit number values.',
        value: 'abc'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        'abc is not a valid input. Please only submit number values.'
      )
      expect(wrapper.props()).toHaveProperty('value', 'abc')
    })
  })
  describe('Frame 3:', () => {
    beforeEach(() => {
      wrapper = mount(
        <Frame
          error=""
          fn={mockTestFn}
          name="cooldown"
          next={mockTestFn}
          msg="60 - units are in minutes"
          text="How long should the cooldown be?"
          value=""
        />
      )
    })

    test('1. should mount with initial props', () => {
      expect(wrapper.props()).toHaveProperty('error', '')
      expect(wrapper.props()).toHaveProperty('name', 'cooldown')
      expect(wrapper.props()).toHaveProperty(
        'text',
        'How long should the cooldown be?'
      )
      expect(wrapper.props()).toHaveProperty('value', '')
    })

    test('2. should throw error on no input', () => {
      wrapper.setProps({
        error: 'You must submit a cooldown for the activity.'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        'You must submit a cooldown for the activity.'
      )
    })

    test('3. should throw error on invalid input', () => {
      wrapper.setProps({
        error: 'abc is not a valid input. Please only submit number values.',
        value: 'abc'
      })
      expect(wrapper.props()).toHaveProperty(
        'error',
        'abc is not a valid input. Please only submit number values.'
      )
      expect(wrapper.props()).toHaveProperty('value', 'abc')
    })
  })
})
