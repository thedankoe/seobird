require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'SEOBird | Affordable SEO for local businesses',
    description:
      'Local businesses thrive if they invest in their online presence. We help get customers to your site, increase conversion rates, and create quality content at an affordable price.',
    siteUrl: 'https://www.seobird.co',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'seobird.co',
        short_name: 'SEOBird',
        start_url: '/',
        icon: 'src/images/seobird-favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-stripe',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}
