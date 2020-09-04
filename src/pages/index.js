import React from "react"
import { useStaticQuery, Link } from "gatsby"

import Layout, { mq } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const IndexPage = () => {
  const { articles } = useStaticQuery(graphql`
    query SiteTitleQuery {
      articles: allDevArticles {
        edges {
          node {
            article {
              id
              url
              published_at
              title
              description
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Hello, I'm Vitor Paladini" />
      <h1>
        Hello, I'm Vitor Paladini. I'm a Front-end Engineer and I write some
        funky stuff about web development.
      </h1>
      <p>
        I've built dozens of websites for small and medium-sized businesses, led
        a handful of teams, and shipped mission-critical code to 250k+ clients
        at a big NASDAQ listed&nbsp;
        <a
          href="https://www.stone.co"
          target="_blank"
          rel="noreferrer noopener"
        >
          company
        </a>
        .
      </p>
      <p>
        I now work at a Copenhagen-based 🇩🇰
        <a
          href="https://twitter.com/paladini_dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          startup
        </a>{" "}
        building next-generation travel management software.
      </p>
      <p>
        You can say hi on{" "}
        <a
          href="https://twitter.com/paladini_dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Twitter
        </a>
        , check my latest posts on&nbsp;
        <a
          href="https://twitter.com/vtrpldn"
          target="_blank"
          rel="noreferrer noopener"
        >
          DEV Community
        </a>
        , and my work stuff in my&nbsp;
        <a
          href="https://twitter.com/vitorpaladini"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
        &nbsp;profile.
      </p>
      <p
        css={css`
          margin-top: clamp(2rem, 5vw, 5.62rem);
        `}
      >
        My favorite posts
      </p>
      <div
        css={css`
          max-width: 540px;
        `}
      >
        {articles.edges.map(({ node: { article } }) => {
          // const publication = new Intl.DateTimeFormat("en-US").format(
          //   new Date(article.publishedAt)
          // )
          // const dateTimeFormat = new Intl.DateTimeFormat("en", {
          //   year: "numeric",
          //   month: "short",
          //   day: "2-digit",
          // })

          return (
            <div>
              <hr />
              <p>{}</p>
              <h2>
                <a href={article.url} target="_blank" rel="noreferrer noopener">
                  {article.title}
                </a>
              </h2>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
