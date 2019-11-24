import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Bio from "../components/Bio"

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  padding: 30px 0;
`

const Logo = styled.div`
  font-size: 30px;
`

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Logo>
            paladini.dev
          </Logo>
        </Link>
      </div>
      <Bio />
    </Wrapper>
  )
}

export default Header