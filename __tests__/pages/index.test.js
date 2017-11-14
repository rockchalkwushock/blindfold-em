import React from 'react'
import { render, shallow } from 'enzyme'

import Index from '../../pages'

describe('Index Page', () => {
  test('should render: "Hello Blindfold\'em"', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.text()).toEqual("Hello Blindfold'em")
  })

  test('should render without exploding', () => {
    const tree = render(<Index />)
    expect(tree).toMatchSnapshot()
  })
})
