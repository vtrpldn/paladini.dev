/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
  }
  p {
    font-family: Graphik;
    font-size: 16px;
    line-height: 1.6;
    width: 100%;
    max-width: 540px;
    margin-bottom: 20px;
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
`

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Global styles={styles} />
      <div>
        <main
          css={css`
            transition: padding 0.3s ease;
            ${mq({
              padding: ["5.625rem 1.875rem", "4.5rem 4.5rem", "10rem 11.25rem"],
            })}
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
