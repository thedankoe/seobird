import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from './styles/TextStyles'
import { FBIcon } from './styles/IconStyles'
import { device } from './styles/MediaQueries'

const FBWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

const FBLink = styled.a`
  width: 15rem;
  margin: 0 auto;
  padding: 1rem;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(1.5rem);
  transition: all ease 0.3s;
  &:hover {
    box-shadow: ${props => props.theme.bsHover};
    background: ${props => props.theme.secondaryLight};
    transform: translateY(1.8rem);
    svg {
      transform: translateX(0);
      transition: all ease 0.3s;
    }
  }
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
    <FBLink
      href="/https://www.facebook.com/groups/2003031109787847/"
      target="_blank"
    >
      Join group
      <FBIcon />
    </FBLink>
  </FBWrapper>
)

export default FBGroup
