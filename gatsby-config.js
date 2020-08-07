require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `James Muriithi`,
    description: `A passionate Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / PHP and some other cool libraries and frameworks.`,
    author: `James Muriithi <muriithijames556@gmail.com>`,
    siteUrl: `https://james-muriithi.firebaseapp.com`,
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `James Muriithi`,
    twitter: `@jam_es_muriithi`,
    facebook: `james-muriithi`,
    banner: `/me-icon.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Muriithi`,
        short_name: `James`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}

// {
//   resolve: "gatsby-plugin-google-tagmanager",
//     options: {
//     id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID || "none",
//       },
// },
