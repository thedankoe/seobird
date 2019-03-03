import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { HeadingStyle, ParagraphStyle } from '../components/styles/TextStyles'
import Layout from '../components/layout'
import { device } from '../components/styles/MediaQueries'
import FBGroup from '../components/fbGroup'

const AboutPageHeadingLight = styled(HeadingStyle)`
  width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
  span {
    font-weight: 600;
  }
`

const AboutPageHeading = styled(HeadingStyle)`
  width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
  span {
    font-weight: 600;
  }
`

const AboutParagraph = styled(ParagraphStyle)`
  font-size: 2.2rem;
  color: ${props => props.theme.grey};
`

const AboutParagraphLight = styled(ParagraphStyle)`
  font-size: 2.2rem;
  color: #fff;
`

const AboutWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.sectionSpace};

  @media ${device.laptopL} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const AboutWrapperLight = styled.div`
  width: 100%;
  padding: ${props => props.theme.sectionSpace};
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );

  @media ${device.laptopL} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const AboutContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media ${device.laptopL} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

const AboutPage = ({ location }) => (
  <>
    <Helmet
      title="Your Marketing Team | Affordable SEO for Local Businesses"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Your Marketing Team"
      headerSub="Our mission is to grow your small business online"
    >
      <AboutWrapper>
        <AboutContainer>
          <AboutPageHeading>Experience in the modern market</AboutPageHeading>
          <AboutParagraph>
            Our team is comprised of tech-centric individuals that have a
            passion for creating. We love when new technology surfaces because
            that means we can better help YOU. We use the most efficient
            software/languages/strategies to achieve your business goals.
          </AboutParagraph>
        </AboutContainer>
      </AboutWrapper>
      <AboutWrapperLight>
        <AboutContainer>
          <AboutPageHeadingLight>
            Experts in all of the above
          </AboutPageHeadingLight>
          <AboutParagraphLight>
            Search engine optimization, web design/development, content
            marketing, online advertisements, social media, and much more.
            Different industries have different customers, we work exclusively
            with local businesses because we understand the market and can offer
            immense value and growth.
          </AboutParagraphLight>
        </AboutContainer>
      </AboutWrapperLight>
      <AboutWrapper>
        <AboutContainer>
          <AboutPageHeading>We care about our clients</AboutPageHeading>
          <AboutParagraph>
            At the end of the day we are here for you. As business owners we
            both undertand that customers are what keeps a business alive. We
            don't want to have a bad relationship with them. We want your
            business to succeed so that SEOBird can grow and help you even more,
            the benefits are mutual.
          </AboutParagraph>
        </AboutContainer>
      </AboutWrapper>
      <FBGroup />
    </Layout>
  </>
)

export default AboutPage
