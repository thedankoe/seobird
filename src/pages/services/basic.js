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
  PackageBuyParaEnd,
} from './standard'
import { FAQParagraph } from '../faq'
import { CheckMark } from '../../components/styles/IconStyles'

const StandardPage = ({ location }) => (
  <>
    <Helmet
      title="Basic Package | SEOBird"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <PackageWrapper>
        <HeadingStyle>The perfect SEO starter pack</HeadingStyle>
        <SubHeadingStyle>
          Our basic SEO consulting package lets businesses try out SEO work.
          There will be noticeable differences in the early stages but SEO shows
          its best results after 6 months.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Prioritize your online presence</SubHeadingStyle>
            <ParagraphStyle>
              With the basic SEO package, we send you a monthly gameplan with a
              prioritized checklist of actionable advice that will most benefit
              your business. Our checklist is detailed and easy to implement. At
              the end of each month we send a monthly ROI report showing our
              successes and our strategy for the coming months.
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
          <PackageBuyCard>
            <PackageBuyList>
              <PackageBuyPara>Services Included</PackageBuyPara>
              <li>
                <CheckMark />
                Advanced SEO &amp; Keyword Research
              </li>
              <li>
                <CheckMark />
                Monthly Website Analysis &amp; Actionable Advice
              </li>
              <li>
                <CheckMark />
                Social Media Strategy
              </li>
              <li>
                <CheckMark />
                Content Writing Guidelines
              </li>
              <li>
                <CheckMark />
                Monthly SEO Strategy
              </li>
              <li>
                <CheckMark />
                Monthly ROI Report
              </li>
              <li>
                <CheckMark />
                Can Add on Email Marketing at Any Time
              </li>
            </PackageBuyList>
            <PackageBuyCTA>
              <SubHeadingStyleLight>
                Customers want to find your business, let your website find{' '}
                <em>them</em>.
              </SubHeadingStyleLight>
              {/* <CheckoutPackage plan="plan_EJVLrIPaulZOtP" /> */}
              <PackageBuyParaEnd>
                If you are interested in email marketing, you will be given the
                option when checking out.
              </PackageBuyParaEnd>
            </PackageBuyCTA>
          </PackageBuyCard>
          <PackageBuyContainer>
            <div>
              <ParagraphStyle>
                This is a recurring monthly bill, you can cancel at anytime by{' '}
                <ColoredLink to="/contact">emailing us</ColoredLink>. Do keep in
                mind that SEO shows its best results with 6 or more months of
                work.
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
            </div>
          </PackageBuyContainer>
        </PackageBuyWrapper>
      </PackageWrapper>
    </Layout>
  </>
)

export default StandardPage
