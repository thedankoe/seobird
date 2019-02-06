import React from 'react'
import styled from 'styled-components'
import {
  SubHeadingStyle,
  HeadingStyle,
  FeedbackLinkStyle,
} from './styles/TextStyles'
import { RightIcon } from './styles/IconStyles'

const AnalysisWrapper = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.sectionSpace};
  padding-top: 3.5rem;
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
`

const ContactCTA = () => (
  <AnalysisWrapper>
    <AnalysisHeading>Let's make it happen</AnalysisHeading>
    <AnalysisSubHeading>
      We'd love to here about your company and your next project. Let us be the
      catalyst to your growth.
    </AnalysisSubHeading>
    <FeedbackLinkStyle>
      Contact Us
      <RightIcon />
    </FeedbackLinkStyle>
  </AnalysisWrapper>
)

export default ContactCTA
