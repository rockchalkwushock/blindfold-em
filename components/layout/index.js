import Footer from './Footer'
import Header from './Header'
import Meta from './Meta'

import { FlexContainer } from '../commons'

const Layout = ({ children }) => (
  <FlexContainer className="layout">
    <Meta />
    <Header />
    <FlexContainer className="main">{children}</FlexContainer>
    <Footer />
  </FlexContainer>
)

export default Layout
