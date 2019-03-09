import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import CaseStudy from '../components/caseStudy'
import ProblemSolution from '../components/problemSolution'
import Process from '../components/process'
import Buy from '../components/buy'
import BlogSection from '../components/blogSection'

const IndexPage = ({ location }) => (
  <>
    <Helmet
      title="SEO Consulting and Services for Small Businesses"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <CaseStudy />
      <ProblemSolution />
      <Process />
      <Buy />
      <BlogSection />
    </Layout>
  </>
)

export default IndexPage
