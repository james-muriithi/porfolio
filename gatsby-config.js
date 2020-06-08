module.exports = {
  siteMetadata: {
    title: `James Muriithi`,
    description: `Software Engineer. James Muriithi's personal website. Passionate about coding and loves technology. Codes in PHP, React, Python, Flutter, JavaScript.`,
    author: `James Muriithi <pratik.shivaraikar@gmail.com>`,
    siteUrl: `https://pratikms.com/`,
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `James Muriithi`,
    twitter: `@jam_es_muriithi`,
    facebook: `james-muriithi`,
    banner: `/assets/src/images/favicon.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/src/images`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID || "none",
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    }
  ],
}
