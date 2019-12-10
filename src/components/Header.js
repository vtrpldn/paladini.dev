import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Bio from "../components/Bio"

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
`

const Right = styled.div`
`

const DarkmodeIcon = styled.div`
  font-size: 32px;
`

const DarkmodeMessage = styled.div`
  width: 130px; 
  transition: margin-right .3s ease;
  margin-right: -130px;
`

const Darkmode = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  &:hover {
    ${DarkmodeMessage} {
      visibility: visible;
      margin-left: 10px;
      margin-right: 0;
    }
  }
`

const Logo = styled.div`
  font-size: 30px;
`

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <Link to="/">
          <Logo>
            paladini.dev
        </Logo>
        </Link>
        <Bio />
      </Left>
      <Right>
        <Darkmode>
          <DarkmodeIcon>
            🌚
          </DarkmodeIcon>
          <DarkmodeMessage>
            Em breve...
          </DarkmodeMessage>
        </Darkmode>
      </Right>
    </Wrapper>
  )
}

export default Header