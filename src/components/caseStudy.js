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
    file(relativePath: { eq: "case-study.jpg" }) {
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
`

const CaseContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
        <HeadingStyle>Replica Printing case study</HeadingStyle>
        <CaseContainer>
          <Img fluid={data.file.childImageSharp.fluid} />
          <ParagraphContainer>
            <SubHeadingStyle>Marketing Goals</SubHeadingStyle>
            <CaseList>
              <li>Profitability with PPC Advertising</li>
              <li>Develop a marketing action plan for future growth</li>
              <li>Understand successes and failures of past efforts</li>
              <li>Enter new marketing channels with established branding</li>
            </CaseList>
            <CaseParagraph>
              Replica's results were outstanding. 16 to 1 revenue with PPC ads,
              250% conversion increase, and a drastic increase in website
              impressions. Other important areas such as email open and
              click-through rates went up by over 100%.
            </CaseParagraph>
          </ParagraphContainer>
        </CaseContainer>
      </CaseWrapper>
    )}
  />
)

export default CaseStudy
