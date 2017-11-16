import React from 'react'
import { mount } from 'enzyme'

import Index from '../../pages'

describe('Index Page', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Index />)
    expect(tree).toMatchSnapshot()
  })
})
