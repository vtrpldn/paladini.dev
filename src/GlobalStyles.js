import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

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
    font-family: 'Roboto', sans-serif;
  }  
  
  h1 {
    line-height: 1.35;
    margin-bottom: 20px;
    color: #35357f;
  }

  h2 {
    font-size: 21px;
    line-height: 1.35;
    margin-bottom: 20px;
    color: #35357f;
  }

  h3 {
    font-size: 16px;
    line-height: 1.35;
    margin-bottom: 12px;
    color: #35357f;
  }
  
  p, li {
    color: #2b2b2b;
    line-height: 1.4;
    margin-bottom: 12px;
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