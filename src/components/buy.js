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

const BuyWrapper = styled.div`
  padding: ${props => props.theme.textSpace};
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  text-align: center;
  color: #fff;
`

const BuySubHeading = styled(SubHeadingStyleLight)`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto ${props => props.theme.textSpace} auto;
`

const Buy = () => (
  <BuyWrapper>
    <HeadingStyleLight>Get started</HeadingStyleLight>
    <BuySubHeading>
      Our packages are value based, we do work according to the price of the
      package each month. This keeps them efficient and affordable.
    </BuySubHeading>
    <ParagraphStyleLight>
      Interested in faster growth?{' '}
      <ColoredLink to="/contact">Contact us</ColoredLink> for a custom package.
    </ParagraphStyleLight>
    <ServicesCard />
    <ProblemLink to="/contact">
      Still unsure? Schedule an appointment
      <RightIcon />
    </ProblemLink>
  </BuyWrapper>
)

export default Buy
