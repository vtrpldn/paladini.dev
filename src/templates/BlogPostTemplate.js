import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const Title = styled.h1`
  font-size: 48px;
`

const Meta = styled.p`
  display: flex;
  align-items: center;
  a {
    line-height: 0;
  }
`

const TwitterIcon = styled.a`
  margin: 0 5px; 
`

const BlogPostTemplate = ({ data, pageContext }) => {

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const localUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Title>{post.frontmatter.title}</Title>
      <Meta>
        Publicado em: {post.frontmatter.date} |
          <TwitterIcon href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title} - ${localUrl}`} target="_blank">
          🐦 Compartilhe no Twitter
          </TwitterIcon>
      </Meta>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {/* <hr />
      <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
              </Link>
          )}
        </li>
      </ul> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YY")
        description
      }
    }
  }
`
