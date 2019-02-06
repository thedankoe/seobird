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
  grid-template-columns: 1fr 1fr;
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

export const ServicesParagraph = styled(ParagraphStyle)`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const ServicesSection = () => (
  <ServicesWrapper>
    <div>
      <ServicesSubHeading>
        <ChartIcon /> Conversion centered websites
      </ServicesSubHeading>
      <ServicesParagraph>
        Drag and drop websites (Wix, Squarespace, etc.) don't always work as
        some would expect, as with anything that comes out of the box.
      </ServicesParagraph>
      <ServicesParagraph>
        Our websites are custom made for YOUR business: the right colors,
        functionality, call to actions, and on page SEO.
      </ServicesParagraph>
      <PlainLink to="/services/website">
        Learn More
        <RightIcon />
      </PlainLink>
    </div>
    <div>
      <ServicesSubHeading>
        <ArrowIcon /> Copywriting
      </ServicesSubHeading>
      <ServicesParagraph>
        People underestimate copywriting, sometimes they don't know what it is.
        It's a way of making sales, guiding readers through your website and
        making them want to purchase one of your products.
      </ServicesParagraph>
      <ServicesParagraph>
        With the right functionality, they can call, email, or order right from
        your website.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <ZoomIcon /> Local SEO
      </ServicesSubHeading>
      <ServicesParagraph>
        SEO consulting has grown exponentially recently because business owners
        are realizing how necessary it is for growth, the only downside is how
        time consuming it can be.
      </ServicesParagraph>
      <ServicesParagraph>
        We streamline the process and optimize every small piece of it for your
        needs.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <PencilIcon /> Content Writing
      </ServicesSubHeading>
      <ServicesParagraph>
        Creating the right content will keep you at the top of Google's
        rankings, targeted content will consistently attract customers.
      </ServicesParagraph>
      <ServicesParagraph>
        People are searching for your services every day, give them a reason to
        buy.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <TargetIcon /> Online Advertisements
      </ServicesSubHeading>
      <ServicesParagraph>
        There are a plethora of online advertisements available to anyone, why
        not use the ones that are best for your business? Facebook ads are the
        most likely to convert for small businesses.
      </ServicesParagraph>
      <ServicesParagraph>
        This is included in the premium package monthly cost. For other
        packages, this is according to your budget.
      </ServicesParagraph>
    </div>
    <div>
      <ServicesSubHeading>
        <SocialIcon /> Social Media
      </ServicesSubHeading>
      <ServicesParagraph>
        This is a given, nearly every person is on some form of social media.
        Imagine having the opportunity to pass by the eyes of many customers in
        your area, this is what a well targeted post does.
      </ServicesParagraph>
      <ServicesParagraph>
        Most businesses have social media accounts, but they lack well designed
        posts and engagement.
      </ServicesParagraph>
    </div>
  </ServicesWrapper>
)

export default ServicesSection
