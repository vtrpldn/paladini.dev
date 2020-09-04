module.exports = {
  siteMetadata: {
    title: `Front-end Engineer`,
    description: `I'm a Front-end Engineer and I write some funky stuff about web development`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0000`,
        theme_color: `#0000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Canela, Graphik"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: "vtrpldn",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
