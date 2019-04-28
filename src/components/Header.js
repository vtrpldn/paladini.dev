import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`

const Logo = styled.div`
  font-size: 30px;
`

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled.div`
  padding: 10px;
`

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          Vitor Paladini
        </Logo>
      </Link>
      <Nav>
        <Link to="/about">
          <NavItem>
            About
          </NavItem>
        </Link>
        <Link to="/talks">
          <NavItem>
            Talks
          </NavItem>
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default Header