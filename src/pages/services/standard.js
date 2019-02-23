import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
  SubHeadingStyleLight,
} from '../../components/styles/TextStyles'
import CheckoutPackage from '../../components/checkoutPackage'
import { FAQParagraph } from '../faq'
import { CheckMark } from '../../components/styles/IconStyles'
import PackageBG from '../../images/package-buy-bg.jpg'

export const PackageWrapper = styled.div`
  position: relative;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
  text-align: center;
`

export const PackageContainer = styled.div`
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
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
      title="Standard Package | SEOBird"
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
              <CheckoutPackage plan="plan_EZFX0pCmg8LOVB" />
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
