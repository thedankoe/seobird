import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import { HeadingStyle, SubHeadingStyle } from '../components/styles/TextStyles'
import ContactImg from '../images/marketing-contact-bg.jpg'

const SuccessWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.sectionSpace} 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(62, 62, 62, 0.8),
      rgba(32, 32, 32, 0.8)
    ),
    url(${ContactImg});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SuccessText = styled.div`
  text-align: center;
  color: #fff;
`

const SuccessHeading = styled(HeadingStyle)`
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const SuccessSub = styled(SubHeadingStyle)`
  color: #fff;
`

const SuccessPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SuccessImgQuery {
        file(relativePath: { eq: "marketing-contact-bg.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title="Thank You!">
          <html lang="en" />
        </Helmet>
        <Layout location={location} headerText="Success">
          <SuccessWrapper>
            <SuccessText>
              <SuccessHeading>Thank you for contacting us!</SuccessHeading>
              <SuccessSub>
                Look out for an email from us within 48 hours
              </SuccessSub>
            </SuccessText>
            <Img fluid={data.file.childImageSharp.fluid} />
          </SuccessWrapper>
        </Layout>
      </>
    )}
  />
)

export default SuccessPage
