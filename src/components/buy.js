import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { ProblemLink, HeadingStyleLight } from './styles/TextStyles'
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

const Buy = () => (
  <BuyWrapper>
    <HeadingStyleLight>Get started</HeadingStyleLight>
    <ServicesCard />
    <ProblemLink to="/contact">
      Still unsure? Schedule an appointment
      <RightIcon />
    </ProblemLink>
  </BuyWrapper>
)

export default Buy
