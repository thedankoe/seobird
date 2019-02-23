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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.tablet} {
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
        Conversion centered websites
      </ServicesSubHeading>
      <ParagraphStyle>
        Our beautiful websites are extremely fast and strategized for
        conversion.
      </ParagraphStyle>
      <PlainLink to="/services/website">
        Learn More
        <RightIcon />
      </PlainLink>
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
        Online Advertisements
      </ServicesSubHeading>
      <ParagraphStyle>
        We are ad agnostic, we offer you the ads that convert the most for your
        business.
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
