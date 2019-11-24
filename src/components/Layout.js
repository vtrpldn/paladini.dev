import React from "react"
import Header from './Header'
import styled from 'styled-components'
import GlobalStyles from '../GlobalStyles'

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
`

const Footer = styled.div`
  margin: 30px 0;
`

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <main>
        {children}
      </main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

export default Layout
