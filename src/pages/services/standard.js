import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  SubHeadingStyleLight,
  CheckoutLink,
} from '../../components/styles/TextStyles'
import { CheckMark } from '../../components/styles/IconStyles'
import PackageBG from '../../images/package-buy-bg.jpg'
import { device } from '../../components/styles/MediaQueries'

export const PackageWrapper = styled.div`
  position: relative;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
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

export const PackageContainer = styled.div`
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

export const HowListContainer = styled.div`
  margin: ${props => props.theme.sectionSpace} auto;
`

export const HowList = styled.ol`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  list-style: none;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

export const HowListItem = styled.li`
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.8;
  text-align: left;
  border-left: 2px solid ${props => props.theme.secondaryLight};
`

export const PackageBuyWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: left;
`

export const PackageBuyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`
export const PackageBuyCard = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  padding: ${props => props.theme.textSpace};
  background-image: linear-gradient(
      to right bottom,
      rgba(3, 89, 117, 0.9),
      rgba(27, 179, 232, 0.9)
    ),
    url(${PackageBG});
  background-position: center;
  background-size: cover;
  color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`

export const PackageBuyList = styled.ul`
  padding: 2rem;
  background: rgba(62, 62, 62, 0.5);
  border-radius: 4px;
  font-size: 2.2rem;
  color: #fff;
  text-align: left;
  list-style: none;
`

export const PackageBuyPara = styled(ParagraphStyle)`
  margin-bottom: 2rem;
  color: #fff;
  font-size: 2.8rem;
`

export const PackageBuyParaEnd = styled(ParagraphStyle)`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 500;
`

export const PackageBuyCTA = styled.div`
  width: 100%;
  height: 100%;
`

const StandardPage = ({ location }) => (
  <>
    <Helmet
      title="Standard SEO Consulting Package | Affordable Online Consulting for Local Businesses"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Standard SEO Consulting"
      headerSub="Monthly actionable guidance sent to your inbox"
    >
      <PackageWrapper>
        <HeadingStyle>The perfect SEO starter pack</HeadingStyle>
        <SubHeadingStyle>
          Our standard SEO consulting package lets businesses try out SEO and
          online marketing. There will be noticeable differences in the early
          stages but SEO shows its best results after 6 months.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Prioritize your online presence</SubHeadingStyle>
            <ParagraphStyle>
              With the standard SEO package, we send you a monthly gameplan with
              a prioritized checklist of actionable advice that will most
              benefit your business. Our checklist is detailed and easy to
              implement. At the end of each month we send a monthly ROI report
              showing our successes and our strategy for the coming months.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Focus more on whats working</SubHeadingStyle>
            <ParagraphStyle>
              Every business has different needs, everyone knows this. Some SEO
              tactics won't work at times even when they are expected to work,
              freelancers and agencies that don't admit this should not be
              trusted. We focus on whats working and refactor what isn't, this
              results in long term growth.
            </ParagraphStyle>
          </div>
        </PackageContainer>
        <HowListContainer>
          <HeadingStyle>How it works</HeadingStyle>
          <HowList>
            <HowListItem>
              We analyze your website and tell you exactly how to fix high
              priority problems
            </HowListItem>
            <HowListItem>
              We do the market research and find article ideas that will convert
            </HowListItem>
            <HowListItem>
              We give you detailed social media posting guidelines that will
              engage customers
            </HowListItem>
            <HowListItem>
              We track analytics to see where we are growing and where we need
              to improve
            </HowListItem>
            <HowListItem>
              All of this is packaged up neatly in a monthly ROI report and sent
              to your inbox
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            We will consistently touch base via email to check in. Any questions
            or concerns are gladly welcomed anytime of the month.
          </SubHeadingStyle>
        </HowListContainer>
        <PackageBuyWrapper>
          <HeadingStyle>Start you growth</HeadingStyle>
          <PackageBuyCard>
            <PackageBuyList>
              <PackageBuyPara>Services Included</PackageBuyPara>
              <li>
                <CheckMark />
                Advanced SEO &amp; Keyword Research
              </li>
              <li>
                <CheckMark />
                Website Analysis &amp; Actionable Advice
              </li>
              <li>
                <CheckMark />
                Usability Testing &amp; Fixes
              </li>
              <li>
                <CheckMark />
                Content Writing Guidelines
              </li>
              <li>
                <CheckMark />
                Facebook Page Strategy
              </li>
              <li>
                <CheckMark />
                Monthly SEO Strategy
              </li>
              <li>
                <CheckMark />
                Monthly ROI Report
              </li>
            </PackageBuyList>
            <PackageBuyCTA>
              <SubHeadingStyleLight>
                Customers want to find your business, let your website find{' '}
                <em>them</em>.
              </SubHeadingStyleLight>
              <CheckoutLink to="/services/standard-checkout">
                Continue to Checkout
              </CheckoutLink>
              <PackageBuyParaEnd>
                If you are interested in email marketing, you will be given the
                option when checking out.
              </PackageBuyParaEnd>
            </PackageBuyCTA>
          </PackageBuyCard>
        </PackageBuyWrapper>
      </PackageWrapper>
    </Layout>
  </>
)

export default StandardPage
