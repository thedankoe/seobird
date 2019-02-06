import React from 'react'
import styled from 'styled-components'
import {
  SubHeadingStyle,
  HeadingStyle,
  FeedbackLinkStyle,
} from './styles/TextStyles'
import { RightIcon } from './styles/IconStyles'
import { device } from './styles/MediaQueries'

const AnalysisWrapper = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.sectionSpace};
  padding: 3.5rem 1.5rem 0 1.5rem;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  text-align: center;
`

const AnalysisHeading = styled(HeadingStyle)`
  margin-bottom: 1rem;
  color: #fff;
`

const AnalysisSubHeading = styled(SubHeadingStyle)`
  color: #fff;
  font-weight: 300;

  @media ${device.tabletL} {
    font-size: 2rem;
  }
`

const AnalysisSection = () => (
  <AnalysisWrapper>
    <AnalysisHeading>
      Get A Free Marketing Analysis of Your Website
    </AnalysisHeading>
    <AnalysisSubHeading>
      Our team will go through your website and give you actionable advice to
      get more customers
    </AnalysisSubHeading>
    <FeedbackLinkStyle>
      Get Feedback
      <RightIcon />
    </FeedbackLinkStyle>
  </AnalysisWrapper>
)

export default AnalysisSection
