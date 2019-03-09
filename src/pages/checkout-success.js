import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import SuccessBGDesktop from '../images/checkout-success-bg-desktop.jpg'
import SuccessBGTablet from '../images/checkout-success-bg-tablet.jpg'
import SuccessBGMobile from '../images/checkout-success-bg-mobile.jpg'
import { device } from '../components/styles/MediaQueries'

export const ClientFormWrapper = styled.div`
  padding: ${props => props.theme.sectionSpace} 0;
  background-image: url(${SuccessBGDesktop});
  background-position: center;
  background-size: cover;

  @media ${device.tabletL} {
    background-image: url(${SuccessBGTablet});
  }

  @media ${device.mobileL} {
    background-image: url(${SuccessBGMobile});
  }
`

export const ClientFormContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`

const ClientForm = styled.iframe`
  border: none;
  width: 64rem;
  height: 135.9rem;

  @media ${device.desktop} {
    width: 100%;
  }

  @media ${device.laptop} {
    height: 150rem;
  }

  @media ${device.tabletS} {
    height: 200rem;
  }
`

const CheckoutSucessPage = ({ location }) => (
  <>
    <Helmet title="Thank You!">
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Your payment was successful"
      headerSub="We need a bit more information about your business"
    >
      <ClientFormWrapper>
        <ClientFormContainer>
          <ClientForm
            src="https://docs.google.com/forms/d/e/1FAIpQLSfOMCfUfP1ERSrL2DqJoqeuAKrDqIrW-CqmN037sPbv-FjQkw/viewform?embedded=true"
            frameBorder="0"
          >
            Loading...
          </ClientForm>
        </ClientFormContainer>
      </ClientFormWrapper>
    </Layout>
  </>
)

export default CheckoutSucessPage
