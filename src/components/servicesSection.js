import React from 'react'
import styled from 'styled-components'
import {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SocialIcon,
  RightIcon,
} from './styles/IconStyles'
import { device } from './styles/MediaQueries'
import { SubHeadingStyle, ParagraphStyle, PlainLink } from './styles/TextStyles'

export const ServicesWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.sectionSpace} auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktopL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 60%;
    grid-template-columns: 1fr;
  }

  @media ${device.tabletS} {
    width: 80%;
    grid-template-columns: 1fr;
  }
`

export const ServicesSubHeading = styled(SubHeadingStyle)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
  }
`

const ServicesSection = () => (
  <ServicesWrapper>
    <div>
      <ServicesSubHeading>
        <ChartIcon />
        Online Advertisements
      </ServicesSubHeading>
      <ParagraphStyle>
        Boost your ranking with paid web traffic, pairs well with SEO packages.{' '}
        <em>Add on after purchase</em>
      </ParagraphStyle>
    </div>
    <div>
      <ServicesSubHeading>
        <ArrowIcon />
        Copywriting
      </ServicesSubHeading>
      <ParagraphStyle>
        Sometimes more content isn't better, the right content for the right
        audience is.
      </ParagraphStyle>
    </div>
    <div>
      <ServicesSubHeading>
        <ZoomIcon />
        Local SEO
      </ServicesSubHeading>
      <ParagraphStyle>
        Google favors local business under certain search conditions, we
        optimize this.
      </ParagraphStyle>
    </div>
    <div>
      <ServicesSubHeading>
        <PencilIcon />
        Content Writing
      </ServicesSubHeading>
      <ParagraphStyle>
        Targeted content to ensure organic growth and conversion for specific
        products.
      </ParagraphStyle>
    </div>
    <div>
      <ServicesSubHeading>
        <TargetIcon />
        Usability Testing
      </ServicesSubHeading>
      <ParagraphStyle>
        Increase ranking and clickthrough rates by making you website accessable
        to everyone.
      </ParagraphStyle>
    </div>
    <div>
      <ServicesSubHeading>
        <SocialIcon />
        Social Media
      </ServicesSubHeading>
      <ParagraphStyle>
        Posts tailored to your audience meant to get them to your website, huge
        for SEO.
      </ParagraphStyle>
    </div>
  </ServicesWrapper>
)

export default ServicesSection
