import React from 'react'
import { render } from 'enzyme'

import Index from '../../pages'

describe('Index Page', () => {
  test('should render without exploding', () => {
    const tree = render(<Index />)
    expect(tree).toMatchSnapshot()
  })
})
