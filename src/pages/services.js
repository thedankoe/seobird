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
import { EmailIcon } from '../components/styles/IconStyles'
import FBGroup from '../components/fbGroup'

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

const EmailMarketingWrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.secondaryLight},
    ${props => props.theme.secondary}
  );
`

const EmailMarketingContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

const EmailSubHeading = styled(SubHeadingStyle)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`

const EmailParagraph = styled(ParagraphStyle)`
  margin-bottom: 1.5rem;
  color: #fff;
`

const BestServiceWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
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
      <EmailMarketingWrapper>
        <EmailMarketingContainer>
          <EmailSubHeading>
            <EmailIcon /> Email Marketing
          </EmailSubHeading>
          <EmailParagraph>
            Email Marketing is a golden nugget for businesses small and large.
            With the right persuasive copy and send rate, this alone could bring
            your business to new heights (and it plays very nicely with SEO
            work).
          </EmailParagraph>
          <EmailParagraph>
            Have us manage your email marketing campaigns, with or without the
            purchase of an SEO package.
          </EmailParagraph>
          <ProblemLink to="/">
            Email marketing as a standalone service
          </ProblemLink>
        </EmailMarketingContainer>
      </EmailMarketingWrapper>
      <BestServiceWrapper>
        <HeadingStyle>The right service for you</HeadingStyle>
        <SubHeadingStyle>
          We do not include specific services in each package, we build a
          strategy tailored to your business and complete tasks that will result
          in the most growth.
        </SubHeadingStyle>
        <ParagraphStyle>
          Cookie cutter SEO work should not exist. businesses understand that
          they are each unique, they have different audiences, different mediums
          for traffic, and need to be treated as such.
        </ParagraphStyle>
      </BestServiceWrapper>
      <Buy location={location} />
      <FBGroup />
    </Layout>
  </>
)

export default MarketingSolutionsPage
