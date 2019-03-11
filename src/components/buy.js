import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  ProblemLink,
  HeadingStyleLight,
  SubHeadingStyleLight,
  ParagraphStyleLight,
  ColoredLink,
} from './styles/TextStyles'
import ServicesCard from './servicesCard'
import { RightIcon } from './styles/IconStyles'

export const BuyWrapper = styled.div`
  padding: ${props => props.theme.textSpace};
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  text-align: center;
  color: #fff;
`

export const BuyContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  h2 {
    ::after {
      @media ${device.tabletS} {
        margin: 1.5rem auto 0 auto;
      }
    }
    @media ${device.tabletS} {
      text-align: center;
    }
  }

  @media ${device.desktopL} {
    width: 80%;
  }

  @media ${device.desktop} {
    width: 100%;
  }
`

export const BuySubHeading = styled(SubHeadingStyleLight)`
  margin: 0 auto ${props => props.theme.textSpace} auto;
`

const Buy = () => (
  <BuyWrapper>
    <BuyContainer>
      <HeadingStyleLight>Get started</HeadingStyleLight>
      <BuySubHeading>
        Our packages are value based, we do work according to the price of the
        package each month. This keeps them streamlined, effective, and
        affordable.
      </BuySubHeading>
      <ParagraphStyleLight>
        Our services are scalable. Interested in faster growth?{' '}
        <ColoredLink to="/contact">Contact us</ColoredLink> for a custom
        package.
      </ParagraphStyleLight>
      <ServicesCard />
      <ProblemLink to="/contact">
        Request more information
        <RightIcon />
      </ProblemLink>
    </BuyContainer>
  </BuyWrapper>
)

export default Buy
