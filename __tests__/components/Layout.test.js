import React from 'react'
import { mount } from 'enzyme'

import Layout from '../../components/layout'

const Test = () => (
  <Layout>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Layout>
)

describe('Component: <Layout />', () => {
  test('should mount without exploding', () => {
    const tree = mount(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
