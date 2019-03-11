import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import {
  HeadingStyle,
  UltraSubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
} from '../components/styles/TextStyles'
import WebsiteFAQ from '../components/websiteFAQ'
import { device } from '../components/styles/MediaQueries'

const FAQWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} 0;

  @media ${device.tabletS} {
    width: 95%;
    margin: ${props => props.theme.sectionSpace} auto;
    text-align: left;
  }
`

const FAQContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const FAQParagraph = styled(ParagraphStyle)`
  margin-top: 1.5rem;
`

const FAQPage = ({ location }) => (
  <>
    <Helmet
      title="FAQ for Online SEO Consulting and Website Creation"
      meta={[
        {
          name: 'description',
          content:
            'We answer questions about online marketing, SEO consulting, and website creation for local businesses.',
        },
        {
          name: 'keywords',
          content: 'small business online marketing questions',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Frequently Asked Questions"
      headerSub="For small businesses looking for affordable online marketing"
    >
      <FAQWrapper>
        <HeadingStyle>Your online marketing questions answered</HeadingStyle>
        <FAQContainer>
          <div>
            <UltraSubHeadingStyle>
              Is there a contract for packages?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              All of our website and SEO packages have contracts. For our month
              to month package, the contract is there to lay out and agree to
              the work we are providing you. You can cancel this package at any
              time.
            </ParagraphStyle>
            <FAQParagraph>
              The premium package and website creation packages are all 6 month
              contracts. Once a package is purchased you will receive an email
              within 48 hours to electronically read and sign the contract.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              What if I just want a website?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              We offer{' '}
              <ColoredLink to="/services/website">
                standalone websites
              </ColoredLink>{' '}
              for a low monthly fee on a 6 month contract. We undertand that
              business owners enjoy a smaller monthly payment rather than a lump
              sum. If you are interested in paying a one time fee{' '}
              <ColoredLink to="/contact">contact us</ColoredLink>.
            </ParagraphStyle>
            <FAQParagraph>
              Depending on what your businesses needs are, we offer packages for
              single page websites, landing pages, and complete functional
              websites tailored to your business.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              Do you create WordPress sites?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              We create websites based on your businesses needs. If your
              business would thrive with a WordPress site then we are inclined
              to create the best WordPress site suited to you.
            </ParagraphStyle>
            <FAQParagraph>
              Our functional website package provides the ability to change
              content on your own. If we see it necessary to do this, we will
              give you access to add or subtract content although we do not
              advise it. Our content strategist is in charge of putting the most
              relevant content on your website.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              Is SEO that important for growth?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              Absolutely, no doubt. If you do not have targeted content bringing
              customers back to your website in order to make a purchase, only
              those that explicitely search for your business will find you. At
              that time its up to your website to make the sale.
            </ParagraphStyle>
            <FAQParagraph>
              SEO is more than just looking good on Google. It gets interested
              customers to visit your website.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>Do you offer PPC ads?</UltraSubHeadingStyle>
            <ParagraphStyle>
              Google Ads and other PPC ads can be a rabbit hole for local
              businesses. With that, you may{' '}
              <ColoredLink to="/contact">contact us</ColoredLink> if you feel it
              would be right for you. We usually offer Facebook Ads after a
              package is purchased if we feel like your business would benefit
              from them.
            </ParagraphStyle>
            <FAQParagraph>
              Online advertisements can be great at times but extremely risky at
              others, we offer them down the road if your business will get
              value from them.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              Do you offer standalone services?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              Our packages are constructed to get you a great return on your
              investment and priced accordingly. If you are already having
              online marketing done for you than{' '}
              <ColoredLink to="/contact">contact us</ColoredLink> to discuss
              setting up a standalone service.
            </ParagraphStyle>
            <FAQParagraph>
              The services we provide are extremely important for long term
              growth. Any of them will help get more customers but are packages
              provide the most value for price.
            </FAQParagraph>
          </div>
        </FAQContainer>
      </FAQWrapper>
      <WebsiteFAQ />
    </Layout>
  </>
)

export default FAQPage
