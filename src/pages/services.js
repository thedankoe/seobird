import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ProblemLink,
} from '../components/styles/TextStyles'
import Layout from '../components/layout'
import { device } from '../components/styles/MediaQueries'
import Buy from '../components/buy'
import ServicesSection from '../components/servicesSection'
import { RightIcon } from '../components/styles/IconStyles'

export const MarketingPageHeading = styled(HeadingStyle)`
  width: ${props => props.theme.maxWidth};
  margin-top: ${props => props.theme.sectionSpace};
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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

export const MarketingPageSubHeading = styled(SubHeadingStyle)`
  width: ${props => props.theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

export const MarketingPageParagraph = styled(ParagraphStyle)`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace} auto;
  text-align: center;
`

const MarketingEnd = styled.h4`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: center;
  font-size: 2.2rem;
  color: ${props => props.theme.secondary};
`

const MarketingEndParagraph = styled(ParagraphStyle)`
  width: 50%;
  margin: 0.5rem auto ${props => props.theme.textSpace} auto;
  text-align: center;

  @media ${device.tablet} {
    width: 90%;
  }
`

const ServicesWebsiteLink = styled(ProblemLink)`
  margin-bottom: ${props => props.theme.sectionSpace};
`

const MarketingSolutionsPage = ({ location }) => (
  <>
    <Helmet
      title="Marketing Solutions | SEOBird"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <MarketingPageHeading>
        Online marketing solutions for local businesses
      </MarketingPageHeading>
      <MarketingPageSubHeading>
        Finding the right marketing company is not easy, there are so many
        choices out there.
      </MarketingPageSubHeading>
      <MarketingPageSubHeading>
        This is why we ONLY work with local businesses. We get you more
        customers through effective online marketing and development.
      </MarketingPageSubHeading>
      <MarketingPageParagraph>
        We provide the following services&#58;
      </MarketingPageParagraph>
      <ServicesSection />
      <MarketingEnd>
        Scenario &#35;1&#58; You Already Have a Website
      </MarketingEnd>
      <MarketingEndParagraph>
        If you already have a website, was it created by an individual/company
        that creates websites just for good looks? Or does it actually get you
        leads/conversions?
      </MarketingEndParagraph>
      <MarketingEndParagraph>
        Does it embody the essence of marketing or target the needs of the
        customer? Does it fulfill your business objective of getting consistent
        customers?
      </MarketingEndParagraph>
      <MarketingEnd>
        Scenario &#35;2&#58; You Don't Have a Website Yet
      </MarketingEnd>
      <MarketingEndParagraph>
        If you don't currently have a website, it's extremely important to have
        one in this competitive market. You could be missing a HUGE customer
        base.
      </MarketingEndParagraph>
      <MarketingEndParagraph>
        All credible print companies have effective websites that showcase their
        amazing products and it results in more customers and higher profits.
      </MarketingEndParagraph>
      <ServicesWebsiteLink to="/services/website">
        In the market for a website?
        <RightIcon />
      </ServicesWebsiteLink>
      <Buy location={location} />
    </Layout>
  </>
)

export default MarketingSolutionsPage
