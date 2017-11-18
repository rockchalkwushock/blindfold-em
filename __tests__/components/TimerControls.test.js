import React from 'react'
import { mount } from 'enzyme'

import TimerControls from '../../components/commons/TimerControls'
import { mockTestFn } from '../../lib'

describe('Component: <TimerControls />', () => {
  describe('Snapshots', () => {
    test('should mount without exploding as TimerControls', () => {
      const tree = mount(<TimerControls start={mockTestFn} stop={mockTestFn} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
