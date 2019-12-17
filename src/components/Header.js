import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
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
  &:hover {
    transform: rotate(1080deg);
    transition: transform 0.6s cubic-bezier(0.2, 1.3, 0.7, 1);
  }
`

const Darkmode = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const Logo = styled.div`
  font-size: 30px;
`

const Header = ({ onClick }) => {
  const { name } = useContext(ThemeContext)

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
        <Darkmode onClick={onClick}>
          <DarkmodeIcon>
            {name === 'dark' ? '🌞' : '🌚'}
          </DarkmodeIcon>
        </Darkmode>
      </Right>
    </Wrapper>
  )
}

export default Header