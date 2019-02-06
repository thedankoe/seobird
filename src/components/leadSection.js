import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const LeadSectionWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.laptopL} {
    width: 95%;
  }
`

const LeadSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

const LeadSectionItem = styled.div`
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.tablet} {
    margin-right: 0;
    :not(:last-child) {
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tabletS} {
    text-align: center;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper>
    <HeadingStyle>
      Local marketing strategies and conversion centered websites guarentee long
      term growth
    </HeadingStyle>
    <LeadSectionContainer>
      <LeadSectionItem>
        <SubHeadingStyle>
          300% average increase in leads for the first year
        </SubHeadingStyle>
        <ParagraphStyle>
          Marketing and SEO are heavily neglected in the modern market. Some
          leads come naturally from the technology that already exists, but
          targeted content is by far the best way to consitently increase the
          amount of leads coming in.
        </ParagraphStyle>
      </LeadSectionItem>
      <LeadSectionItem>
        <SubHeadingStyle>
          3x web traffic increase for the first year
        </SubHeadingStyle>
        <ParagraphStyle>
          Online advertisements put your content in front of users who have
          already expressed interest in buying! These alone offer a huge
          opportunity to get specific visitors to your website, thus increasing
          the amount of consistent customers (a lot being large companies).
        </ParagraphStyle>
      </LeadSectionItem>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
