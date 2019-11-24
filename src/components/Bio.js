import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const Wrap = styled.div`
`

const BioQueryWrapper = () => <StaticQuery query={bioQuery} render={Bio} />

const Bio = data => {
  const { author, social } = data.site.siteMetadata
  return (
    <Wrap>
      <p>
        por <a href={`https://twitter.com/${social.twitter}`}>Vitor Paladini</a>
      </p>
    </Wrap>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default BioQueryWrapper
