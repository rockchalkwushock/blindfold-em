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
})
