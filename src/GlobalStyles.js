import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #fbfbfb;
    color: #2b2b2b;
  }

  body {
    font-family: 'Bitter', serif;
  }  
  
  h1 {
    line-height: 1.2;
    margin-bottom: 20px;
    color: #35357f;
    font-family: 'Work Sans', sans-serif;
  }

  h2 {
    line-height: 1.5;
    margin-bottom: 20px;
    color: #35357f;
    font-family: 'Work Sans', sans-serif;
  }

  h3 {
    line-height: 1.5;
    margin-bottom: 12px;
    color: #35357f;
    font-family: 'Work Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }

  p {
    color: #2b2b2b;
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
    color: #2b2b2b;
    line-height: 1.5;
    margin-bottom: 10px;
    font-size: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: #35357f;
    &:hover {
      color: #3f3f96;
    }
    &:active {
      color: #4a4ab2;
    }
  }
  
  ul {
    padding-left: 20px;
  }
`

export default GlobalStyle