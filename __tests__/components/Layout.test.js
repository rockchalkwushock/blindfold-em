import React from 'react'
import { render } from 'enzyme'

import Layout from '../../components/layout'

const Test = () => (
  <Layout>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </Layout>
)

describe('Component: <Layout />', () => {
  test('should render without exploding', () => {
    const tree = render(<Test />)
    expect(tree).toMatchSnapshot()
  })
})
