import React from 'react'
import { mount } from 'enzyme'

import Input from '../../components/commons/Input'
import { mockTestFn } from '../../lib'

describe('Component: <Input />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Input name="activity" fn={mockTestFn} value="" />)
  })

  test('1. Should show initial prop values', () => {
    expect(wrapper.props().name).toEqual('activity')
    expect(wrapper.props().value).toEqual('')
  })

  test('2. Should show updated prop values', () => {
    wrapper.setProps({
      value: 'coding'
    })
    expect(wrapper.props().name).toEqual('activity')
    expect(wrapper.props().value).toEqual('coding')
  })
})
