import React from 'react'
import { mount } from 'enzyme'

import FrameLogic from '../../components/commons/FrameLogic'

const form = {
  activity: '',
  cooldown: '',
  currentFrame: 1,
  timer: ''
}

const fn = () => {}

describe('Component: <FrameLogic />', () => {
  let wrapper
  let input
  beforeEach(() => {
    wrapper = mount(
      <FrameLogic form={form} next={fn} onChange={fn} prev={fn} />
    )
    input = wrapper.find('input')
  })

  test('1. Frame 1: should mount', () => {
    expect(wrapper.props().form.currentFrame).toEqual(1)
    expect(wrapper.find('Frame').props().text).toEqual(
      'What activity are you working on?'
    )
  })
  test('2. Frame 1: should receive updated props on input', () => {
    input.simulate('change', {
      target: { name: 'activity', value: 'coding' }
    })
    wrapper.setProps({
      form: {
        ...form,
        activity: 'coding'
      }
    })
    expect(wrapper.props().form.activity).toEqual('coding')
    expect(wrapper.find('Frame').props().value).toEqual('coding')
  })
  test('3. Frame 2: should mount', () => {
    wrapper.setProps({
      form: {
        ...form,
        currentFrame: 2
      }
    })
    expect(wrapper.props().form.currentFrame).toEqual(2)
    expect(wrapper.find('Frame').props().text).toEqual(
      'How long should the timer be?'
    )
  })
  test('4. Frame 2: should receive updated props on input', () => {
    wrapper.setProps({
      form: {
        ...form,
        currentFrame: 2,
        timer: '12'
      }
    })
    input.simulate('change', {
      target: { name: 'timer', value: '12' }
    })
    expect(wrapper.find('Frame').props().value).toEqual('12')
    expect(wrapper.props().form.timer).toEqual('12')
  })
  test('5. Frame 3: should mount', () => {
    wrapper.setProps({
      form: {
        ...form,
        currentFrame: 3
      }
    })
    expect(wrapper.props().form.currentFrame).toEqual(3)
    expect(wrapper.find('Frame').props().text).toEqual(
      'How long should the cooldown be?'
    )
  })
  test('6. Frame 3: should receive updated props on input', () => {
    wrapper.setProps({
      form: {
        ...form,
        cooldown: '3',
        currentFrame: 3
      }
    })
    input.simulate('change', {
      target: { name: 'cooldown', value: '3' }
    })
    expect(wrapper.find('Frame').props().value).toEqual('3')
    expect(wrapper.props().form.cooldown).toEqual('3')
  })
})
