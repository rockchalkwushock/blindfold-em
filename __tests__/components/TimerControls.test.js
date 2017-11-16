import React from 'react'
import { mount } from 'enzyme'

import TimerControls from '../../components/commons/TimerControls'

describe('Component: <TimerControls />', () => {
  describe('Snapshots', () => {
    test('should mount without exploding as TimerControls', () => {
      const tree = mount(<TimerControls start={() => {}} stop={() => {}} />)
      expect(tree).toMatchSnapshot()
    })
  })
})
