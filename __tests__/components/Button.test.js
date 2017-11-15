import React from 'react'
import { mount } from 'enzyme'

import Button from '../../components/commons/Button'

describe('Component: <Button />', () => {
  describe('Next:', () => {
    test('should mount without exploding in disabled state', () => {
      const tree = mount(
        <Button className="next" condition fn={() => {}} text="Next" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding in enabled state', () => {
      const tree = mount(
        <Button className="next" condition={false} fn={() => {}} text="Next" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Prev:', () => {
    test('should mount without exploding  in disabled state', () => {
      const tree = mount(
        <Button className="prev" condition fn={() => {}} text="Prev" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding  in enabled state', () => {
      const tree = mount(
        <Button className="prev" condition={false} fn={() => {}} text="Prev" />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Start:', () => {
    test('should mount without exploding  in disabled state', () => {
      const tree = mount(
        <Button className="start" condition fn={() => {}} text="Start" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding  in enabled state', () => {
      const tree = mount(
        <Button
          className="start"
          condition={false}
          fn={() => {}}
          text="Start"
        />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Pause:', () => {
    test('should mount without exploding  in disabled state', () => {
      const tree = mount(
        <Button className="pause" condition fn={() => {}} text="Pause" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding  in enabled state', () => {
      const tree = mount(
        <Button
          className="pause"
          condition={false}
          fn={() => {}}
          text="Pause"
        />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Stop:', () => {
    test('should mount without exploding  in disabled state', () => {
      const tree = mount(
        <Button className="stop" condition fn={() => {}} text="Stop" />
      )
      expect(tree).toMatchSnapshot()
    })
    test('should mount without exploding  in enabled state', () => {
      const tree = mount(
        <Button className="stop" condition={false} fn={() => {}} text="Stop" />
      )
      expect(tree).toMatchSnapshot()
    })
  })
})
