import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
} from './styles/TextStyles'

const CASE_STUDY_QUERY = graphql`
  query CaseStudyQuery {
    file(relativePath: { eq: "local-seo-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CaseWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }
`

const CaseContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

const CaseImage = styled(Img)`
  box-shadow: ${props => props.theme.bs};
  border-radius: 5px;
`

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    text-align: center;
  }
`

const CaseList = styled.ul`
  list-style: none;
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;
`

const CaseParagraph = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
`

const CaseStudy = () => (
  <StaticQuery
    query={CASE_STUDY_QUERY}
    render={data => (
      <CaseWrapper>
        <HeadingStyle>Local SEO HGB Construction case study</HeadingStyle>
        <CaseContainer>
          <CaseImage fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <SubHeadingStyle>Services Provided</SubHeadingStyle>
            <CaseList>
              <li>Website creation</li>
              <li>Mobile optimization</li>
              <li>SEO citation building</li>
              <li>Content writing</li>
            </CaseList>
            <CaseParagraph>
              HGB's ranking boosted to number 1 for multiple keywords, they were
              able to grow from one to four employees in under one year. With
              tailored SEO services that were projected to work, there wasn't a
              need for expensive consulting or unnecessary services.
            </CaseParagraph>
          </ParagraphContainer>
        </CaseContainer>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
