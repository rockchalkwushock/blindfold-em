import React from 'react'
import { render, shallow } from 'enzyme'

import Input from '../../components/commons/Input'

const Test = () => <Input name="activity" fn={() => {}} value="" />

describe('Component: <Input />', () => {
  test('should render <input /> with declared attributes', () => {
    const wrapper = shallow(<Test />).getElement()
    expect(wrapper.props.name).toEqual('activity')
    expect(wrapper.props.value).toEqual('')
    // TODO How to check [Function: fn] === ?
  })

  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
