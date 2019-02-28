import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'
import ContactImg from '../images/marketing-contact-bg.jpg'

const ContactWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(3, 89, 117, 0.9),
      rgba(27, 179, 232, 0.9)
    ),
    url(${ContactImg});
  background-position: center;
  background-size: cover;
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
