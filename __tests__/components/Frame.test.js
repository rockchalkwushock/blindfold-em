import React from 'react'
import { mount } from 'enzyme'

import Frame from '../../components/commons/Frame'

describe('Component: <Frame />', () => {
  describe('Snapshots', () => {
    test('should mount without exploding as Frame 1', () => {
      const tree = mount(
        <Frame
          fn={() => {}}
          name="activity"
          next={() => {}}
          text="What activity are you working on?"
          value=""
        />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding as Frame 2', () => {
      const tree = mount(
        <Frame
          fn={() => {}}
          name="timer"
          next={() => {}}
          prev={() => {}}
          text="How long should the timer be?"
          value=""
        />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding as Frame 3', () => {
      const tree = mount(
        <Frame
          fn={() => {}}
          name="cooldown"
          next={() => {}}
          prev={() => {}}
          text="How long should the cooldown be?"
          value=""
        />
      )
      expect(tree).toMatchSnapshot()
    })
  })
})
