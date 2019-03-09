import React from 'react'
import styled from 'styled-components'
import InfoBlock from './infoBlock'
import { device } from './styles/MediaQueries'
import {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SocialIcon,
} from './styles/IconStyles'

const InfoWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.textSpace};
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`

const InfoSection = () => (
  <InfoWrapper>
    <InfoBlock
      icon={<ChartIcon />}
      heading="Websites that work"
      text="We don't just create websites (like everyone else does). We create websites that work."
    />
    <InfoBlock
      icon={<ArrowIcon />}
      heading="Copywriting"
      text="The art of persuasion, we make it irresistable for people to buy your product."
    />
    <InfoBlock
      icon={<ZoomIcon />}
      heading="Local SEO"
      text="Effective on-page and off-page SEO to get you ranking in top positions on Google."
    />
    <InfoBlock
      icon={<PencilIcon />}
      heading="Content Writing"
      text="Articles targeted towards your customers interests."
    />
    <InfoBlock
      icon={<TargetIcon />}
      heading="Usability Testing"
      text="Rank higher and increase clickthrough rates with an accessable website."
    />
    <InfoBlock
      icon={<SocialIcon />}
      heading="Social Media"
      text="Social media growth to improve credibility and gain new customers."
    />
  </InfoWrapper>
)

export default InfoSection
