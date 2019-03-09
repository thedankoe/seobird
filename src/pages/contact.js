import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import ContactImgDesktop from '../images/contact-bg-desktop.jpg'
import ContactImgTablet from '../images/contact-bg-tablet.jpg'
import ContactImgMobile from '../images/contact-bg-mobile.jpg'
import { device } from '../components/styles/MediaQueries'

const ContactWrapper = styled.div`
  width: 100%;
  background-image: url(${ContactImgDesktop});
  background-position: center;
  background-size: cover;

  @media ${device.tabletL} {
    background-image: url(${ContactImgTablet});
  }

  @media ${device.mobileL} {
    background-image: url(${ContactImgMobile});
  }
`

const ContactPage = ({ location }) => (
  <>
    <Helmet
      title="Contact Us"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Contact Us"
      headerSub="Request a custom package or learn more about our services"
    >
      <ContactWrapper>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  </>
)

export default ContactPage
