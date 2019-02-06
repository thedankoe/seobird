import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { CheckMark } from './styles/IconStyles'
import { device } from './styles/MediaQueries'

const PricingOptionsWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-top: ${props => props.theme.sectionSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

const PricingOptionsContainer = styled.div`
  text-align: center;
`

const PricingHeading = styled(HeadingStyle)`
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const PricingList = styled.ul`
  margin-top: ${props => props.theme.textSpace};
  list-style: none;
  font-size: 1.8rem;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`

const PricingOptions = () => (
  <PricingOptionsWrapper>
    <PricingOptionsContainer>
      <PricingHeading>Standard</PricingHeading>
      <SubHeadingStyle>
        For businesses that already have a website and are only interested in
        effective online marketing
      </SubHeadingStyle>
      <ParagraphStyle>$700/month</ParagraphStyle>
      <ParagraphStyle>No once-off or hidden fees</ParagraphStyle>
      <PricingList>
        <li>
          <CheckMark />
          Advanced SEO
        </li>
        <li>
          <CheckMark />
          Advanced Google Ads Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Online Advertisement Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Ongoing Website Support (1 hour)
        </li>
        <li>
          <CheckMark />
          Daily (weekday) Social Media Posts/Engagement
        </li>
        <li>
          <CheckMark />
          AB Testing &amp; Landing Page Improvements
        </li>
        <li>
          <CheckMark />
          Monthly ROI Assessment
        </li>
        <li>
          <CheckMark />1 Detailed Blog Article Every Week (1,200+ words)
        </li>
      </PricingList>
    </PricingOptionsContainer>
    <PricingOptionsContainer>
      <PricingHeading>Premium</PricingHeading>
      <SubHeadingStyle>
        For businesses that don't have a website and are interested in effective
        online marketing
      </SubHeadingStyle>
      <ParagraphStyle>$1000/month (12 month contract)</ParagraphStyle>
      <ParagraphStyle>No once-off or hidden fees</ParagraphStyle>
      <PricingList>
        <li>
          <CheckMark />
          Conversion-centered Website Design
        </li>
        <li>
          <CheckMark />
          Advanced SEO
        </li>
        <li>
          <CheckMark />
          Advanced Google Ads Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Online Advertisement Management &amp; Reporting
        </li>
        <li>
          <CheckMark />
          Ongoing Website Support (1 hour)
        </li>
        <li>
          <CheckMark />
          Daily (weekday) Social Media Posts/Engagement
        </li>
        <li>
          <CheckMark />
          AB Testing &amp; Landing Page Improvements
        </li>
        <li>
          <CheckMark />
          Monthly ROI Assessment
        </li>
        <li>
          <CheckMark />1 Detailed Blog Article Every Week (1,200+ words)
        </li>
      </PricingList>
    </PricingOptionsContainer>
  </PricingOptionsWrapper>
)

export default PricingOptions
