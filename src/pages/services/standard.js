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

export const PackageBuyList = styled.ul`
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

export const PackageBuyCard = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  padding: 2rem;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
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
        <HeadingStyle>All of your SEO needs done for you</HeadingStyle>
        <SubHeadingStyle>
          Our standard SEO package will get your business more customers.
          Consistently creating content, sending email campaigns, and optimizing
          all areas of your website will result in long term growth.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Advanced SEO and Keyword Research</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Google Ads Management</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Online ad management</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Website changes</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Ongoing website support</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Social media posts</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Content writing</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Advanced copywriting</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Monthly ROI report</SubHeadingStyle>
            <ParagraphStyle>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem, quae! Placeat necessitatibus, rerum in molestiae
              dolores commodi iste. Iure id debitis omnis beatae harum
              temporibus ducimus iusto atque ipsa repellat.
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
                keep in mind that SEO shows its best results with 6 or more
                months of work.
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
        </PackageBuyWrapper>
      </PackageWrapper>
    </Layout>
  </>
)

export default StandardPage
