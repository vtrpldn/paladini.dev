import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"

import Layout from "../layouts/Main"
import SEO from "../components/Seo"

const Title = styled.h1`
  font-size: 48px;
`

const Meta = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    line-height: 0;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start
  }
`

const TwitterIcon = styled.a`
  margin: 0 5px; 
  @media (max-width: 767px) {
    margin: 30px 0 15px; 
  }
`

const BlogPostTemplate = ({ data, pageContext, pathContext }) => {

  const { slug } = pathContext
  const siteTitle = data.site.siteMetadata.title
  const shareUrl = `${data.site.siteMetadata.siteUrl}${slug}`

  const { frontmatter, html, excerpt } = data.markdownRemark
  const { title, description, date } = frontmatter

  return (
    <Layout title={siteTitle}>
      <SEO
        title={title}
        description={description || excerpt}
      />
      <Title>{title}</Title>
      <Meta>
        Publicado em: {date}
        <TwitterIcon href={`https://twitter.com/intent/tweet?text=${title} - ${shareUrl}`} target="_blank">
          🐦 Compartilhe no Twitter
        </TwitterIcon>
      </Meta>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
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

export default BlogPostTemplate