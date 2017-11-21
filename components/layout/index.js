import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

import { FlexContainer, Link, SubTitle } from '../commons'

/**
 * @function Layout
 * @description renders the application layout.
 *
 * @prop {Array} children
 * @returns React Element
 */
const Layout = ({ children }) => (
  <FlexContainer className="layout">
    <Meta />
    <Header>
      <SubTitle text="Blindfold'em" />
    </Header>
    <FlexContainer className="main">{children}</FlexContainer>
    <Footer>
      <Link text="RCWS Development" url="https://rcws-development.com" />
    </Footer>
  </FlexContainer>
)

export default Layout
