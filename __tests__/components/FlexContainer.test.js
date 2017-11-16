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
    test('should mount without exploding using ".layout" styles', () => {
      const tree = mount(<Test className="layout" />)
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding using ".main" styles', () => {
      const tree = mount(<Test className="main" />)
      expect(tree).toMatchSnapshot()
    })
  })
})
