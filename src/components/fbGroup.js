import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { FBIcon } from './styles/IconStyles'
import { device } from './styles/MediaQueries'
import { CardLink } from './servicesCard'

const FBWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const FBGroup = () => (
  <FBWrapper>
    <HeadingStyle>Join our Facebook group</HeadingStyle>
    <SubHeadingStyle>
      We are building a community of local businesses that are interested in SEO
      and online marketing on Facebook.
    </SubHeadingStyle>
    <ParagraphStyle>
      We post and share quality information about SEO and explain how to
      implement them in your business. Our members are encouraged to share their
      experiences and ask questions to help other businesses that are
      experiencing the same issues.
    </ParagraphStyle>
    {/* Change to normal link */}
    <CardLink to="/">
      Join group
      <FBIcon />
    </CardLink>
  </FBWrapper>
)

export default FBGroup
