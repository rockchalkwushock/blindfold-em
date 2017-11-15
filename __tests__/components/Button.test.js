import React from 'react'
import { mount } from 'enzyme'

import Button from '../../components/commons/Button'

describe('Component: <Button />', () => {
  describe('Next:', () => {
    test('should mount without exploding in disabled state', () => {
      const tree = mount(<Button condition fn={() => {}} text="Next" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding in enabled state', () => {
      const tree = mount(<Button condition={false} fn={() => {}} text="Next" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Prev:', () => {
    test('should mount without exploding  in disabled state', () => {
      const tree = mount(<Button condition fn={() => {}} text="Prev" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding  in enabled state', () => {
      const tree = mount(<Button condition={false} fn={() => {}} text="Prev" />)
      expect(tree).toMatchSnapshot()
    })
  })
})
