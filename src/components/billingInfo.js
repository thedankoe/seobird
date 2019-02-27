import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
  ColoredLink,
} from './styles/TextStyles'
import { PackageBuyContainer } from '../pages/services/standard'
import { FAQParagraph } from '../pages/faq'

const PackageBilling = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.secondaryLight};
  text-align: left;
`

const BillingInfo = () => (
  <>
    <HeadingStyle>Billing Information</HeadingStyle>
    <PackageBilling>
      <SubHeadingStyle>
        You will be billed on the same day each month, if you signed up on
        January 24th your next billing date will be February 24th.
      </SubHeadingStyle>
      <ParagraphStyle>
        If you would rather pay manually each month, or on a specific day of the
        week <ColoredLink to="/contact">contact us</ColoredLink> and we will
        send you an invoice with your requested parameters.
      </ParagraphStyle>
    </PackageBilling>
    <PackageBuyContainer>
      <div>
        <ParagraphStyle>
          This is a recurring monthly bill, you can cancel at anytime by{' '}
          <ColoredLink to="/contact">emailing us</ColoredLink>. Do keep in mind
          that SEO shows its best results with 6 or more months of work.
        </ParagraphStyle>
        <FAQParagraph>
          After your purchase you will be redirected to a form to give us more
          information on your company. This form will help us better understand
          your needs and allow us to strategize SEO for your business.
        </FAQParagraph>
      </div>
      <div>
        <ParagraphStyle>
          By purchasing this package you agree to our{' '}
          <ColoredLink to="/">Terms</ColoredLink> and have read our{' '}
          <ColoredLink to="/">Privacy Policy</ColoredLink>.
        </ParagraphStyle>
        <FAQParagraph>
          A contract will be sent after purchase outlining the project details
          and services provided.
        </FAQParagraph>
      </div>
    </PackageBuyContainer>
  </>
)

export default BillingInfo
