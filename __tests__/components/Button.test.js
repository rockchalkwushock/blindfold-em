import React from 'react'
import { mount } from 'enzyme'

import Button from '../../components/commons/Button'
import { mockTestFn } from '../../lib'

describe('Component: <Button />', () => {
  describe('Next:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="next" fn={mockTestFn} text="Next" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Reset:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="reset" fn={mockTestFn} text="Reset" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Start:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="start" fn={mockTestFn} text="Start" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Stop:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="stop" fn={mockTestFn} text="Stop" />
      )
      expect(tree).toMatchSnapshot()
    })
  })
})
