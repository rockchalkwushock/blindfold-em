import React from 'react'
import { mount } from 'enzyme'

import SubTitle from '../../components/commons/SubTitle'

const Test = () => <SubTitle text="What activity are you working on?" />

describe('Component: <SubTitle />', () => {
  test('should mount matching text for <h2/>', () => {
    const tree = mount(<Test />)
    expect(tree.text()).toEqual('What activity are you working on?')
  })

  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
