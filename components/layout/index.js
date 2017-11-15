import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Meta from './Meta'

import { FlexContainer } from '../commons'

const Layout = ({ children }) => (
  <FlexContainer>
    <Meta />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </FlexContainer>
)

export default Layout
