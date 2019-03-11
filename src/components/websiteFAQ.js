import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { ParagraphStyle, ProblemLink } from './styles/TextStyles'
import { RightIcon } from './styles/IconStyles'

const MarketingEnd = styled.h4`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: center;
  font-size: 2.2rem;
  color: ${props => props.theme.secondary};

  @media ${device.tabletS} {
    width: 95%;
    text-align: left;
  }
`

const MarketingEndParagraph = styled(ParagraphStyle)`
  width: 50%;
  margin: 0.5rem auto ${props => props.theme.textSpace} auto;
  text-align: center;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ServicesWebsiteLink = styled(ProblemLink)`
  margin-bottom: ${props => props.theme.sectionSpace};
`

const WebsiteFAQ = () => (
  <div>
    <MarketingEnd>Scenario &#35;1&#58; You Already Have a Website</MarketingEnd>
    <MarketingEndParagraph>
      If you already have a website, was it created by an individual/company
      that creates websites just for good looks? Or does it actually get you
      leads/conversions?
    </MarketingEndParagraph>
    <MarketingEndParagraph>
      Does it embody the essence of marketing or target the needs of the
      customer? Does it fulfill your business objective of getting consistent
      customers?
    </MarketingEndParagraph>
    <MarketingEnd>
      Scenario &#35;2&#58; You Don't Have a Website Yet
    </MarketingEnd>
    <MarketingEndParagraph>
      If you don't currently have a website, it's extremely important to have
      one in this competitive market. You could be missing a HUGE customer base.
    </MarketingEndParagraph>
    <MarketingEndParagraph>
      All credible local businesses have effective websites that showcase their
      amazing products and it results in more customers and higher profits.
    </MarketingEndParagraph>
    <ServicesWebsiteLink to="/services/website">
      Website Packages
      <RightIcon />
    </ServicesWebsiteLink>
  </div>
)

export default WebsiteFAQ
