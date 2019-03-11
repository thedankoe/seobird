import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
  HeadingStyleLight,
  ProblemLink,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'
import { PackageWrapper, PackageContainer } from './standard'
import { CheckMark, RightIcon } from '../../components/styles/IconStyles'
import { BuySubHeading, BuyWrapper, BuyContainer } from '../../components/buy'
import {
  CardContainer,
  Card,
  CardParagraph,
  CardList,
} from '../../components/servicesCard'

export const BillingEmailWrapper = styled(PackageWrapper)`
  text-align: left;
`

const EmailForYouContainer = styled.div`
  margin-top: ${props => props.theme.sectionSpace};
`

const EmailMarketingPage = ({ location }) => (
  <>
    <Helmet
      title="Email Marketing"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Email Marketing Packages"
      headerSub="Keep customers coming back and get more web traffic"
    >
      <PackageWrapper>
        <HeadingStyle>Weekly email marketing</HeadingStyle>
        <SubHeadingStyle>
          If you do not currently have a way of collecting emails, check out our{' '}
          <ColoredLink to="/services/website">
            single page website package
          </ColoredLink>{' '}
          for us to create a landing page for email marketing. This will be an
          option below.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Keep customers buying</SubHeadingStyle>
            <ParagraphStyle>
              Our email sequences act as a reminder to current customers to
              offer your businesses current specials and remind them of how
              great your product is. This keeps customers returning and allows
              them to forward the email to friends and family.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Convert potential customers</SubHeadingStyle>
            <ParagraphStyle>
              Our emails are crafted to convert. This is a separate email list
              specifically for potential customers. The customers on this list
              have already expressed interest in buying, this is why they gave
              us their email. Let us convert them to consistent customers.
            </ParagraphStyle>
          </div>
        </PackageContainer>
        <EmailForYouContainer>
          <HeadingStyle>Is email marketing for you?</HeadingStyle>
          <SubHeadingStyle>
            For the most effective email marketing, you should have an SEO and
            usability optimized website. There has to be a place for customer to
            go after receiving an email.
          </SubHeadingStyle>
          <ParagraphStyle>
            We highly recommend a{' '}
            <ColoredLink to="/services/website">
              conversion centered website
            </ColoredLink>{' '}
            and a couple months of{' '}
            <ColoredLink to="/services">SEO work</ColoredLink> for the most
            effective email marketing.
          </ParagraphStyle>
        </EmailForYouContainer>
      </PackageWrapper>
      <BuyWrapper>
        <BuyContainer>
          <HeadingStyleLight>Get started</HeadingStyleLight>
          <BuySubHeading>
            Landing pages and weekly email marketing convert potential customers
            into consistent buyers and keeps current customers coming back for
            more.
          </BuySubHeading>
          <CardContainer>
            <Card>
              <HeadingStyle>Weekly Email Marketing</HeadingStyle>
              <CardParagraph>$299/month</CardParagraph>
              <ParagraphStyle>
                Month to Month - <span>Done For You</span>
              </ParagraphStyle>
              <CardList>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Copywriting for each email, this increases conversion rates
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Professionally designed weekly emails, if customers are
                  receptive we increase the rate of emails for free
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Managed from your email marketing service, we will need access
                  to this
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Monthly growth report and ongoing strategy
                </li>
              </CardList>
              <CheckoutPackage plan="plan_EbqdENYKmxGw2I" />
            </Card>
            <Card>
              <HeadingStyle>Email &amp; Landing Page</HeadingStyle>
              <CardParagraph>$399/month</CardParagraph>
              <ParagraphStyle>
                6 month contract - <span>Done For You</span>
              </ParagraphStyle>
              <CardList>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Everything that is included in the weekly email marketing
                  package
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Copywriting and professional design of landing page based
                  around your business' colors and goal
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Ability to capture emails for email sequences
                </li>
                <li>
                  <div>
                    <CheckMark />
                  </div>
                  Monthly growth report and ongoing strategy
                </li>
              </CardList>
              <CheckoutPackage plan="plan_EbqcYk2HLDYSc9" />
            </Card>
          </CardContainer>
          <ProblemLink to="/contact">
            Request more information
            <RightIcon />
          </ProblemLink>
        </BuyContainer>
      </BuyWrapper>
    </Layout>
  </>
)

export default EmailMarketingPage
