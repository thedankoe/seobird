import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'
import { PackageWrapper, PackageBilling, PackageBuyContainer } from './standard'
import { FAQParagraph } from '../faq'
import { CheckMark } from '../../components/styles/IconStyles'
import {
  CardContainer,
  Card,
  CardList,
  CardParagraph,
} from '../../components/servicesCard'
import { BillingEmailWrapper } from './email-marketing'

const StandardCheckoutCard = styled(Card)`
  width: 50%;
`

const StandardCheckout = ({ location }) => (
  <>
    <Helmet
      title="Standard SEO Checkout"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Standard SEO Checkout">
      <PackageWrapper>
        <HeadingStyle>Add on weekly email marketing</HeadingStyle>
        <SubHeadingStyle>
          Email marketing can be crucial for local businesses. Paired with SEO
          work, we can easily start gathering emails and reaching customers that
          are hesitant of buying your services.
        </SubHeadingStyle>
        <CardContainer>
          <StandardCheckoutCard>
            <SubHeadingStyle>
              Continue with Standard SEO Consulting
            </SubHeadingStyle>
            <CardParagraph>$399/month</CardParagraph>
            <ParagraphStyle>
              Start growing your business with affordable SEO consulting
            </ParagraphStyle>
            <CheckoutPackage plan="plan_EZFX0pCmg8LOVB" />
            <FAQParagraph>Secure payment through Stripe</FAQParagraph>
          </StandardCheckoutCard>
        </CardContainer>
        <CardContainer>
          <StandardCheckoutCard>
            <SubHeadingStyle>
              Standard SEO Consulting and Weekly Email Marketing
            </SubHeadingStyle>
            <CardParagraph>$649/month</CardParagraph>
            <ParagraphStyle>
              Our email marketing $299/month as a standalone service. Increase
              your growth with weekly email campaigns that compliment local SEO
            </ParagraphStyle>
            <CardList>
              <li>
                <div>
                  <CheckMark />
                </div>
                Multiple email sequences to both current and potential customers
              </li>
              <li>
                <div>
                  <CheckMark />
                </div>
                Keep customers coming back to buy and convert potential
                customers
              </li>
              <li>
                <div>
                  <CheckMark />
                </div>
                Emails crafted to convert, these are not generic "check-in"
                emails
              </li>
            </CardList>
            <CheckoutPackage plan="plan_EaGLboC2E8evm4" />
            <FAQParagraph>Secure payment through Stripe</FAQParagraph>
          </StandardCheckoutCard>
        </CardContainer>
      </PackageWrapper>
    </Layout>
  </>
)

export default StandardCheckout
