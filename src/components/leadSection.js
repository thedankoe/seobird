import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
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
          targeted content is by far the best way (next to{' '}
          <ColoredLink to="/">email marketing</ColoredLink>) to consitently
          increase the amount of leads/customers coming in.
        </ParagraphStyle>
      </LeadSectionItem>
      <LeadSectionItem>
        <SubHeadingStyle>Everything leads back to your website</SubHeadingStyle>
        <ParagraphStyle>
          Why is it not more accepted that every piece of your business should
          be trying to lead a customer to your website in order to make a sale?
          This includes social media, SEO, email marketing, and most other
          online marketing strategies. Optimize them all and customers will be
          flowing in.
        </ParagraphStyle>
      </LeadSectionItem>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
