import React from "react"
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
`

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Wrapper>
  )
}

export default Layout
