import React from "react"
import { Link } from "gatsby"

import Layout, { mq } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/Seo"
import Space from "../components/space"
import { css } from "@emotion/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Hello, I'm Vitor Paladini" />
    <h1
      css={css`
        font-family: Canela;
        line-height: 1.1;
        font-weight: 100;
        transition: font-size 0.3s ease;
        width: 100%;
        max-width: 1080px;
        ${mq({
          "font-size": ["2rem", "4rem", "5.62rem"],
          "margin-bottom": ["2rem", "4rem", "5.62rem"],
        })}
      `}
    >
      Hello, I'm Vitor Paladini. I'm a Front-end Engineer and I write funny
      stuff about web development.
    </h1>
    <p>
      I've built dozens of websites for small and medium-sized businesses, led a
      handful of teams, and shipped mission-critical code at a big NASDAQ listed
      company.
    </p>
    <p>
      I now work at a Copenhagen-based 🇩🇰&nbsp; startup building next-generation
      travel management software.
    </p>
    <p>
      You can say hi on{" "}
      <a href="" target="_blank" rel="noreferrer noopener">
        Twitter
      </a>
      , check my latest posts on&nbsp;
      <a href="" target="_blank" rel="noreferrer noopener">
        DEV Community
      </a>
      , and my work stuff in my&nbsp;
      <a href="" target="_blank" rel="noreferrer noopener">
        LinkedIn
      </a>
      &nbsp;profile.
    </p>
  </Layout>
)

export default IndexPage
