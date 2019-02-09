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

const FAQWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} 0;
`

const FAQContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

export const FAQParagraph = styled(ParagraphStyle)`
  margin-top: 1.5rem;
`

const FAQPage = ({ location }) => (
  <>
    <Helmet
      title="FAQ | SEOBird"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <FAQWrapper>
        <HeadingStyle>All of your questions answered</HeadingStyle>
        <FAQContainer>
          <div>
            <UltraSubHeadingStyle>
              Is there a contract for packages?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              The basic and standard SEO packages are month-to-month, no
              contract involved. One of these packages gives business owners the
              freedom to try out SEO and see if they benefit from it (we know
              you will).
            </ParagraphStyle>
            <FAQParagraph>
              The premium package and website creation packages are all 6 month
              contracts. Once a package is purchased you will be redirected to
              fill out a survey and sign the contract.
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
              single page websites, multi-page site, and functional sites
              tailored to your businesses needs.
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
            <UltraSubHeadingStyle>Do you do PPC ads?</UltraSubHeadingStyle>
            <ParagraphStyle>
              Google Ads and other PPC ads can be a rabbit hole for local
              businesses. Usually it isn't worth the money for what you are
              getting in return. We focus on Facebook advertisements with those
              who buy our premium package. Facebook returns much more for local
              businesses.
            </ParagraphStyle>
            <FAQParagraph>
              If you are interested is online advertisements, take a look at our
              services that we offer in our{' '}
              <ColoredLink to="/services/premium">
                premium SEO package
              </ColoredLink>
              .
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
    </Layout>
  </>
)

export default FAQPage
