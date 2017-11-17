import React from 'react'
import { mount } from 'enzyme'

import Button from '../../components/commons/Button'

describe('Component: <Button />', () => {
  describe('Next:', () => {
    test('should mount without exploding', () => {
      const tree = mount(<Button className="next" fn={() => {}} text="Next" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Prev:', () => {
    test('should mount without exploding', () => {
      const tree = mount(<Button className="prev" fn={() => {}} text="Prev" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Reset:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="reset" fn={() => {}} text="Reset" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Start:', () => {
    test('should mount without exploding', () => {
      const tree = mount(
        <Button className="start" fn={() => {}} text="Start" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Stop:', () => {
    test('should mount without exploding', () => {
      const tree = mount(<Button className="stop" fn={() => {}} text="Stop" />)
      expect(tree).toMatchSnapshot()
    })
  })
})
