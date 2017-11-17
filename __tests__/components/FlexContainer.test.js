import React from 'react'
import { mount } from 'enzyme'

import FlexContainer from '../../components/commons/FlexContainer'

const Test = ({ className }) => (
  <FlexContainer className={className}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </FlexContainer>
)

describe('Component: <FlexContainer />', () => {
  describe('Snapshots', () => {
    test('should mount without exploding using div styles', () => {
      const tree = mount(<Test />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".buttons" styles', () => {
      const tree = mount(<Test className="buttons" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".completed" styles', () => {
      const tree = mount(<Test className="completed" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".frame" styles', () => {
      const tree = mount(<Test className="frame" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".layout" styles', () => {
      const tree = mount(<Test className="layout" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".main" styles', () => {
      const tree = mount(<Test className="main" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".timer" styles', () => {
      const tree = mount(<Test className="timer" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".wizard" styles', () => {
      const tree = mount(<Test className="wizard" />)
      expect(tree).toMatchSnapshot()
    })
  })
})
