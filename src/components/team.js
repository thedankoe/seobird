import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'

const TEAM_QUERY = graphql`
  query {
    dan: file(relativePath: { eq: "web-developer-dan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devan: file(relativePath: { eq: "content-marketing-devan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cori: file(relativePath: { eq: "marketing-seo-cori.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TeamHeading = styled(HeadingStyle)`
  margin-top: ${props => props.theme.sectionSpace};
`

const TeamWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  display: flex;
  justify-content: space-around;
`

const TeamContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TeamText = styled.div`
  text-align: center;
`

const ImageContainer = styled.div`
  width: 15rem;
  margin-bottom: 1.5rem;
  box-shadow: ${props => props.theme.bs};
  border: 0.5rem solid ${props => props.theme.secondary};
  border-radius: 50%;
  overflow: hidden;
`

const Team = () => (
  <StaticQuery
    query={TEAM_QUERY}
    render={data => (
      <>
        <TeamHeading>Our Team</TeamHeading>
        <TeamWrapper>
          <TeamContainer>
            <ImageContainer>
              <Img fluid={data.dan.childImageSharp.fluid} />
            </ImageContainer>
            <TeamText>
              <ParagraphStyle>Dan</ParagraphStyle>
              <ParagraphStyle>
                <span>Web Developer &amp; SEO</span>
              </ParagraphStyle>
            </TeamText>
          </TeamContainer>
          <TeamContainer>
            <ImageContainer>
              <Img fluid={data.cori.childImageSharp.fluid} />
            </ImageContainer>
            <TeamText>
              <ParagraphStyle>Cori</ParagraphStyle>
              <ParagraphStyle>
                <span>Marketing &amp; SEO</span>
              </ParagraphStyle>
            </TeamText>
          </TeamContainer>
          <TeamContainer>
            <ImageContainer>
              <Img fluid={data.devan.childImageSharp.fluid} />
            </ImageContainer>
            <TeamText>
              <ParagraphStyle>Devan</ParagraphStyle>
              <ParagraphStyle>
                <span>Content Strategist</span>
              </ParagraphStyle>
            </TeamText>
          </TeamContainer>
        </TeamWrapper>
      </>
    )}
  />
)

export default Team
