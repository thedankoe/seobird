import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import { device } from '../../components/styles/MediaQueries'
import {
  MarketingPageHeading,
  MarketingPageSubHeading,
  MarketingPageParagraph,
} from '../services'
import {
  HeadingStyle,
  ParagraphStyle,
  ColoredLink,
  SubHeadingStyleLight,
} from '../../components/styles/TextStyles'
import {
  ServicesWrapper,
  ServicesSubHeading,
  ServicesParagraph,
} from '../../components/servicesSection'
import {
  PackageBuyWrapper,
  PackageBuyContainer,
  PackageBuyCard,
  PackageBuyList,
  PackageBuyPara,
  PackageBuyCTA,
} from './standard'
import CheckoutPackage from '../../components/checkoutPackage'
import { CheckMark } from '../../components/styles/IconStyles'
import { FAQParagraph } from '../faq'

const WebsiteBuyWrapper = styled(PackageBuyWrapper)`
  width: ${props => props.theme.maxWidth};
`

const WebsitePage = ({ location }) => (
  <>
    <Helmet
      title="Website Creation | SEOBird"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <MarketingPageHeading>
        Conversion centered websites do the work for you
      </MarketingPageHeading>
      <MarketingPageSubHeading>
        Websites that are optimized for SEO, mobile, and sales convert more
        customers, a lot of businesses don't do this. Why?
      </MarketingPageSubHeading>
      <MarketingPageSubHeading>
        Most web designers and developers focus on their craft, developing
        websites that are <em>sometimes</em> good looking and effective. They
        don't pay too much attention to the purpose of a website.
      </MarketingPageSubHeading>
      <MarketingPageParagraph>
        Our team creates stunning websites with top-notch copywriting, SEO
        optimization, and the right features. We do not cut corners.
      </MarketingPageParagraph>
      <ServicesWrapper>
        <div>
          <ServicesSubHeading>Strategized for your business</ServicesSubHeading>
          <ServicesParagraph>
            From the starting sketch to the last line of code, our websites are
            built with your business in mind. Without a strategy for both user
            interface and experience a website will flop. Too many people skip
            this crucial step.
          </ServicesParagraph>
        </div>
        <div>
          <ServicesSubHeading>Custom functionality</ServicesSubHeading>
          <ServicesParagraph>
            If your business needs online order forms, done. A fancy animated
            photo gallery? No problem. SEOBird puts the right functionality in
            the right place, making it irresistable for companies to buy from
            you.
          </ServicesParagraph>
        </div>
        <div>
          <ServicesSubHeading>Affordable</ServicesSubHeading>
          <ServicesParagraph>
            We understand that businesses love affordable monthly payments
            rather than a lump sum. You are always able to buy out of the
            contract but as long as the contract is active we update the website
            as much as you desire.
          </ServicesParagraph>
        </div>
        <div>
          <ServicesSubHeading>Optimized</ServicesSubHeading>
          <ServicesParagraph>
            Search engines are always crawling for the latest and most optimized
            content. Outdated sites will not get as many customers as modern
            sites. On-page SEO, mobile responsive, and well designed/developed
            websites are our specialty.
          </ServicesParagraph>
        </div>
      </ServicesWrapper>
      <WebsiteBuyWrapper>
        <HeadingStyle>Start your growth</HeadingStyle>
        <PackageBuyCard>
          <PackageBuyList>
            <PackageBuyPara>Services Included</PackageBuyPara>
            <li>
              <CheckMark />
              Advanced SEO &amp; Keyword Research
            </li>
            <li>
              <CheckMark />
              Weekly Email Campaigns
            </li>
            <li>
              <CheckMark />
              Daily (weekday) Social Media Posts/Engagement
            </li>
            <li>
              <CheckMark />
              Weekly Content Writing
            </li>
            <li>
              <CheckMark />
              Copywriting for All Pages
            </li>
            <li>
              <CheckMark />
              Facebook Advertisements
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
            <CheckoutPackage plan="plan_EJVLrIPaulZOtP" />
          </PackageBuyCTA>
        </PackageBuyCard>
        <PackageBuyContainer>
          <div>
            <ParagraphStyle>
              This is a recurring monthly bill, you can cancel at anytime. Do
              keep in mind that SEO shows its best results with 6 or more months
              of work.
            </ParagraphStyle>
            <FAQParagraph>
              After your purchase you will be redirected to a form to give us
              more information on your company. This form will help us better
              understand your needs and allow us to strategize SEO for your
              business.
            </FAQParagraph>
          </div>
          <div>
            <ParagraphStyle>
              By purchasing this package you agree to our{' '}
              <ColoredLink to="/">Terms</ColoredLink> and have read our{' '}
              <ColoredLink to="/">Privacy Policy</ColoredLink>.
            </ParagraphStyle>
            <FAQParagraph>
              Your contract will be sent to your email within 24 hours of the
              form submission for you to sign.
            </FAQParagraph>
          </div>
        </PackageBuyContainer>
      </WebsiteBuyWrapper>
    </Layout>
  </>
)

export default WebsitePage
