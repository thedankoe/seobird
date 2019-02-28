import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GrowthTipsBlog from '../components/growthTips'
import { HeadingStyle } from '../components/styles/TextStyles'
import Layout from '../components/layout'

const BlogPageHeading = styled(HeadingStyle)`
  margin-top: ${props => props.theme.sectionSpace};
  margin-bottom: ${props => props.theme.textSpace};
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const BlogPage = ({ location }) => (
  <>
    <Helmet
      title="Growth Tips for Local Businesses | Affordable SEO Consulting"
      meta={[
        {
          name: 'description',
          content:
            'Learn how to grow your online presence as a local or small business. Learn SEO, online marketing, and how to implement them.',
        },
        {
          name: 'keywords',
          content:
            'growth tips for local businesses, how to grow as a small business',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Growth Tips for Small Businesses"
      headerSub="Learn how to grow your online presence as a small business"
    >
      <BlogPageHeading>Expert advice on growing locally</BlogPageHeading>
      <GrowthTipsBlog />
    </Layout>
  </>
)

export default BlogPage
