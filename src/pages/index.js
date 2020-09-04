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

  const featured = articles.edges.reduce(
    (prev, { node: { article } }, ind, arr) => {
      switch (article.id) {
        case 380582:
          prev[0] = article
          return prev
        case 412148:
          prev[1] = article
          return prev
        case 426071:
          prev[2] = article
          return prev
        default:
          return prev
      }
    },
    []
  )

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
          href="https://outboundhq.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          startup
        </a>{" "}
        building next-generation travel management software.
      </p>
      <p
        css={css`
          margin-top: 5.62rem;
        `}
      >
        Here's some articles that I'm really proud of:
      </p>
      <div
        css={css`
          max-width: 540px;
        `}
      >
        {featured.map(article => {
          const date = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }).format(new Date(article.published_at))
          console.log(article.tags)
          return (
            <div key={article.id}>
              <hr
                css={css`
                  margin-bottom: 2.5rem;
                `}
              />
              <p>
                {date},{" "}
                {article.tags.map(tag => (
                  <>
                    <a href={`https://dev.to/${tag}`}>#{tag}</a>&nbsp;
                  </>
                ))}
              </p>
              <h2>
                <a href={article.url} target="_blank" rel="noreferrer noopener">
                  {article.title}
                </a>
              </h2>
            </div>
          )
        })}
      </div>
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
          href="https://dev.to/vtrpldn"
          target="_blank"
          rel="noreferrer noopener"
        >
          DEV Community
        </a>
        , and my work stuff in my&nbsp;
        <a
          href="https://www.linkedin.com/in/vitorpaladini/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
        &nbsp;profile.
      </p>
    </Layout>
  )
}

export default IndexPage
