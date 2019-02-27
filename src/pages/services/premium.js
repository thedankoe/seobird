import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
  SubHeadingStyleLight,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'
import {
  PackageWrapper,
  PackageContainer,
  PackageBuyWrapper,
  PackageBuyContainer,
  PackageBuyCard,
  PackageBuyList,
  PackageBuyPara,
  PackageBuyCTA,
  PackageBilling,
  PackageBuyParaEnd,
} from './standard'
import { FAQParagraph } from '../faq'
import { CheckMark } from '../../components/styles/IconStyles'

const PremiumPage = ({ location }) => (
  <>
    <Helmet
      title="Premium SEO Package | Affordable SEO for Local Businesses"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Premium Package">
      <PackageWrapper>
        <HeadingStyle>The ultimate growth bundle</HeadingStyle>
        <SubHeadingStyle>
          Our premium SEO package will put your business on the fast track to
          reaching new customers. With weekly content and email campaigns
          included, growth is guarenteed.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Prioritize your online presence</SubHeadingStyle>
            <ParagraphStyle>
              With the premium SEO package, we send you a monthly gameplan with
              a prioritized checklist of what we plan to accomplish that month.
              All you have to do is sit back and watch your online presence
              expand. At the end of each month we send a monthly ROI report
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
        <PackageBuyWrapper>
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
                Website Optimization
              </li>
              <li>
                <CheckMark />
                Daily (weekday) Social Media Posts
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
                Monthly ROI Report
              </li>
              <li>
                <CheckMark />
                Weekly Email Campaigns
              </li>
            </PackageBuyList>
            <PackageBuyCTA>
              <SubHeadingStyleLight>
                Customers want to find your business, let your website find{' '}
                <em>them</em>.
              </SubHeadingStyleLight>
              <CheckoutPackage plan="plan_EaGGbHfckB3loj" />
              <PackageBuyParaEnd>
                Secure payment through Stripe
              </PackageBuyParaEnd>
            </PackageBuyCTA>
          </PackageBuyCard>
        </PackageBuyWrapper>
      </PackageWrapper>
    </Layout>
  </>
)

export default PremiumPage
