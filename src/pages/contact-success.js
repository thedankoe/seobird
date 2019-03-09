import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import { HeadingStyle, ColoredLink } from '../components/styles/TextStyles'
import { ClientFormWrapper, ClientFormContainer } from './checkout-success'
import { RightIcon } from '../components/styles/IconStyles'

const CheckoutSucessPage = ({ location }) => (
  <>
    <Helmet title="Thank You!">
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Thank you for contacting us"
      headerSub="We will email you shortly with your requested information"
    >
      <ClientFormWrapper>
        <ClientFormContainer>
          <HeadingStyle>In the mean time...</HeadingStyle>
          <ColoredLink to="/blog">
            Check out our growth tips <RightIcon />
          </ColoredLink>
          <ColoredLink to="/services">
            More information on our services <RightIcon />
          </ColoredLink>
          <ColoredLink to="/services/email-marketing">
            Interested in email marketing? <RightIcon />
          </ColoredLink>
          <ColoredLink to="/services/website">
            Need a new website? <RightIcon />
          </ColoredLink>
          <ColoredLink to="/faq">
            Frequently asked questions <RightIcon />
          </ColoredLink>
        </ClientFormContainer>
      </ClientFormWrapper>
    </Layout>
  </>
)

export default CheckoutSucessPage
