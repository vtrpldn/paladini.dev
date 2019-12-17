import React, { useState, useEffect } from "react"
import Header from '../components/Header'
import styled, { ThemeProvider } from 'styled-components'
import { lighten } from 'polished'
import GlobalStyles from '../GlobalStyles'

const themeLight = {
  name: 'light',
  bodyBackground: '#fbfbfb',
  bodyColor: '#2b2b2b',
  bodyFont: 'Bitter, serif',
  colorPrimary: '#8a423d',
  headingFont: 'Work Sans, sans-serif'
}

const themeDark = {
  ...themeLight,
  name: 'dark',
  bodyBackground: '#000000',
  bodyColor: '#eeeeee',
  colorPrimary: '#bb6b65',
}

const Body = styled.div`  
  min-height: 100vh;
  font-family: ${({ theme }) => theme.bodyFont};
  background-color: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.bodyColor};
  transition: color 0.6s cubic-bezier(0.2, 1.3, 0.7, 1), background-color 0.6s cubic-bezier(0.2, 1.3, 0.7, 1);
  
  h1 {
    line-height: 1.2;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colorPrimary};
    font-family: ${({ theme }) => theme.headingFont};
  }

  h2 {
    line-height: 1.5;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colorPrimary};
    font-family: ${({ theme }) => theme.headingFont};
  }

  h3 {
    line-height: 1.5;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colorPrimary};
    font-family: ${({ theme }) => theme.headingFont};
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.5;
    margin-bottom: 30px;
    font-size: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  li {
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    transition: color .3s ease;
    color: ${({ theme }) => theme.colorPrimary};
    &:hover {
      color: ${({ theme }) => lighten(0.15, theme.colorPrimary)};
    }
    &:active {
      color: ${({ theme }) => lighten(0.2, theme.colorPrimary)};
    }
  }
  
  ul {
    padding-left: 20px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  padding: 0 15px;
`

const Footer = styled.div`
  margin: 30px 0;
`

const Layout = ({ title, children }) => {
  let startingTheme

  if (typeof window !== 'undefined') {
    startingTheme = localStorage.getItem('theme') === 'dark'
      ? themeDark
      : themeLight
  } else {
    startingTheme = themeDark
  }

  const [theme, setTheme] = useState(startingTheme)

  const toggleTheme = () => {
    setTheme(theme => {
      if (theme === themeLight) {
        return themeDark
      } else {
        return themeLight
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('theme', theme.name)
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Wrapper>
          <GlobalStyles />
          <Header onClick={toggleTheme} />
          <main>
            {children}
          </main>
          <Footer>
            © {new Date().getFullYear()}, Built with
        {` `}
            <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
          </Footer>
        </Wrapper>
      </Body>
    </ThemeProvider>
  )
}

export default Layout
