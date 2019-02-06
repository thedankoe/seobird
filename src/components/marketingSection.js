import React from 'react'
import styled from 'styled-components'
import MarketingBlock from './marketingBlock'
import {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SocialIcon,
} from './styles/IconStyles'
import { device } from './styles/MediaQueries'

const MarketingWrapper = styled.div`
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

const MarketingSection = () => (
  <MarketingWrapper>
    <MarketingBlock
      icon={<ChartIcon style={{ marginRight: '1rem' }} />}
      heading="Websites that work"
      text="Drag and drop websites (Wix, Squarespace, etc.) don't always work as some would expect, as with anything that comes out of the box."
      subText="Our websites are custom made for YOUR business: the right colors, functionality, call to actions, and on page SEO."
    />
    <MarketingBlock
      icon={<ArrowIcon style={{ marginRight: '1rem' }} />}
      heading="Google Ads (PPC)"
      text="Climbing the google ranks takes time, Google Ads put you right at the top depending on the users keyword choice. A percentage of your monthly cost will go towards us optimizing this."
      subText="In the beginning stages this could be extremely helpful for lead generation"
    />
    <MarketingBlock
      icon={<ZoomIcon style={{ marginRight: '1rem' }} />}
      heading="SEO"
      text="SEO consulting has grown exponentially recently because business owners are realizing how necessary it is for growth, the only downside is how time consuming it can be."
      subText="We streamline the process and optimize every small piece of it for your needs."
    />
    <MarketingBlock
      icon={<PencilIcon style={{ marginRight: '1rem' }} />}
      heading="Content Writing"
      text="Creating the right content will keep you at the top of Google's rankings, targeted content will consistently attract customers."
      subText="With the vape industry growing every day, business owners like you have a HUGE opportunity to grow using targeted content."
    />
    <MarketingBlock
      icon={<TargetIcon style={{ marginRight: '1rem' }} />}
      heading="Online Advertisements"
      text="There are a plethora of online advertisements available to anyone, why not efficiently use all of them? The person that just searched for Juul Pods could have never seen your business, we don't want that."
      subText="This is included in your monthly cost. Don't miss another customer, start now."
    />
    <MarketingBlock
      icon={<SocialIcon style={{ marginRight: '1rem' }} />}
      heading="Social Media"
      text="This is a given, nearly EVERY PERSON is on some form of social media. Imagine having the opportunity to pass by the eyes of many customers in your area, this is what a well done post does."
      subText="Let us catch the eyes of a future customer for you."
    />
  </MarketingWrapper>
)

export default MarketingSection
