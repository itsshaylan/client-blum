module.exports = {
  siteMetadata: {
    siteUrl: `https://blumnailbar.com`,
    title: `BLŪM`,
    description: `BLUM : Beauty, Lashes, U & Me - Wichita's premiere nail bar`,
    author: `@blumnailbarict`,
  },
  plugins: [
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyAgxPe9awx-oclnAhWZrv2nacCUqcgzIKM`,
        center: `3560 N Maize Rd Suite 102. Wichita, KS 67205`,
        markers: `brown|3560 N Maize Rd Suite 102. Wichita, KS 67205`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/IMG_0010.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
