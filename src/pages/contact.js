import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import ContactImg from '../images/marketing-contact-bg.jpg'

const ContactWrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(62, 62, 62, 0.8),
      rgba(32, 32, 32, 0.8)
    ),
    url(${ContactImg});
  background-position: center;
  background-size: cover;
`

const PricingPage = ({ location }) => (
  <>
    <Helmet
      title="Contact | SEOBird"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location}>
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  </>
)

export default PricingPage
