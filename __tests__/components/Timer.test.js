import React from 'react'
import { mount } from 'enzyme'

import Timer from '../../components/commons/Timer'

describe('Component: <Timer />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Timer activity="coding" cooldown="3" timer="12" />)
    expect(tree).toMatchSnapshot()
  })
})
