/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Global, css } from "@emotion/core"
import facepaint from "facepaint"

const breakpoints = [768, 992, 1200]

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-family: Canela;
    line-height: 1.1;
    font-weight: 100;
    transition: font-size 0.3s ease;
    width: 100%;
    max-width: 1080px;
    font-size: clamp(2rem, 5vw, 6.62rem);
    margin-bottom: clamp(2rem, 5vw, 6.62rem);
  }
  h2 {
    font-family: Canela;
    line-height: 1.3;
    font-weight: 100;
    transition: font-size 0.3s ease;
    width: 100%;
    max-width: 1080px;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: clamp(2rem, 5vw, 3rem);
    a {
      color: #000000;
      text-decoration: none;
      padding: 2px 0;
      &:hover {
        border-bottom: solid 1px #000000;
      }
    }
  }

  p {
    font-family: Graphik;
    font-size: 1rem;
    line-height: 1.8;
    width: 100%;
    max-width: 540px;
    margin-bottom: 1.25rem;
    color: #808080;
    a {
      color: #000000;
      text-decoration: none;
      border-bottom: solid 1px #808080;
      padding: 2px 0;
      &:hover {
        border-bottom: solid 1px #000000;
      }
    }
  }
  hr {
    border: none;
    border-top: solid 1px #e2e2e2;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={styles} />
      <div>
        <main
          css={css`
            transition: padding 0.3s ease;
            padding-top: clamp(1.875rem, 5vw, 10rem);
            padding-bottom: clamp(5.625rem, 5vw, 10rem);
            padding-right: clamp(1.875rem, 5vw, 11.25rem);
            padding-left: clamp(1.875rem, 5vw, 11.25rem);
          `}
        >
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
