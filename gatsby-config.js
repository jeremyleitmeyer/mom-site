module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // Source Images from Filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Styling
    `gatsby-plugin-styled-components`,
    // Image Transformers
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Instagram Source
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `username`, // TODO: Change to her IG Handle
      },
    },
    // PWA Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
