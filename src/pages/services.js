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
import { EmailIcon, RightIcon } from '../components/styles/IconStyles'
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

    @media ${device.tabletS} {
      margin: 1.5rem 0 0 0;
    }
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

  @media ${device.tabletS} {
    text-align: left;
  }
`

export const MarketingPageParagraph = styled(ParagraphStyle)`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const EmailMarketingWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.textSpace} 0;
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
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const MarketingSolutionsPage = ({ location }) => (
  <>
    <Helmet
      title="Local Marketing Services for Small Businesses at an Affordable Price"
      meta={[
        {
          name: 'description',
          content:
            'Local marketing services and SEO consulting for small businesses. We get your business ranking in search engines at an affordable price.',
        },
        {
          name: 'keywords',
          content:
            'local marketing services, rank in search results, grow small business online',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Local Marketing Services"
      headerSub="Rank in search results and grow online"
    >
      <MarketingPageHeading>
        Local Marketing Services to Rank Your Small Business
      </MarketingPageHeading>
      <MarketingPageSubHeading>
        Finding the right marketing company is not easy, there are so many
        choices out there.
      </MarketingPageSubHeading>
      <MarketingPageSubHeading>
        This is why we ONLY work with local businesses. We get you more
        customers through effective online marketing and search engine ranking.
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
            The golden nugget for all businesses. Stay in weekly contact with
            your current and future customers. Have us manage your email
            marketing campaigns, with or without the purchase of an SEO package.
          </EmailParagraph>
          <ProblemLink to="/services/email-marketing">
            Purchase standalone
            <RightIcon />
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
    </Layout>
  </>
)

export default MarketingSolutionsPage
