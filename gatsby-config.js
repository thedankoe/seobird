module.exports = {
  siteMetadata: {
    title: 'SEOBird | Affordable SEO for local businesses',
    description:
      'Local businesses thrive if they invest in their online presence. We help get customers to your site, increase conversion rates, and create quality content at an affordable price.',
    siteUrl: 'https://www.seo-bird.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: `/sitemap.xml`,
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135459641-1',
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'seo-bird.com',
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
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
        wrapperStyle: `margin-left: 0!important; margin-right: 0!important;`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-remark-copy-linked-files',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-stripe',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
  ],
}
