import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spring } from 'react-spring'
import Nav from './nav'
import { HeaderLinkStyle } from './styles/TextStyles'
import { DownIcon } from './styles/IconStyles'
import HeaderImg from '../images/seo-marketing-hero.jpg'
import { device } from './styles/MediaQueries'

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: linear-gradient(
      to right bottom,
      rgba(61, 61, 61, 0.9),
      rgba(38, 38, 38, 0.9)
    ),
    url(${HeaderImg});
  background-position: center;
  background-size: cover;
`

const HeaderText = styled.div`
  position: absolute;
  left: 25%;
  top: 50%;
  color: #fff;
  z-index: 2;
  transform: translate(-25%, -50%);

  @media ${device.tabletS} {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const HeaderHeadingHome = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
  text-align: left;
  color: #fff;
  text-shadow: ${props => props.theme.ts};

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.tabletS} {
    width: 50rem;
    text-align: center;
  }
`

const HeaderHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
  text-align: left;
  color: #fff;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem 0 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;

    @media ${device.tablet} {
      margin: 1.5rem auto 0 auto;
    }
  }

  @media ${device.tablet} {
    width: 50rem;
    text-align: center;
    font-size: 3.5rem;
  }
`

const HeaderSubHeading = styled.span`
  font-size: 3rem;
  font-weight: 300;
  text-align: left;
  color: #fff;
  display: block;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.tabletS} {
    width: 50rem;
    text-align: center;
  }
`

function DynamicHeaderText({ location }) {
  if (location.pathname === '/') {
    return (
      <HeaderText>
        <HeaderHeadingHome>
          Package based web services for local businesses
          <HeaderSubHeading>
            With the most affordable SEO consulting on the market
          </HeaderSubHeading>
        </HeaderHeadingHome>
        <HeaderLinkStyle to="/services">
          Start Now
          <DownIcon />
        </HeaderLinkStyle>
      </HeaderText>
    )
  }
  if (location.pathname === '/services') {
    return (
      <HeaderText>
        <HeaderHeading>Marketing Solutions</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/blog') {
    return (
      <HeaderText>
        <HeaderHeading>Growth Tips</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/faq') {
    return (
      <HeaderText>
        <HeaderHeading>Frequently Asked Questions</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/about') {
    return (
      <HeaderText>
        <HeaderHeading>Your Marketing Team</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/contact') {
    return (
      <HeaderText>
        <HeaderHeading>Contact Us</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/success') {
    return (
      <HeaderText>
        <HeaderHeading>Success</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/services/basic') {
    return (
      <HeaderText>
        <HeaderHeading>Basic Package</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/services/standard') {
    return (
      <HeaderText>
        <HeaderHeading>Standard Package</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/services/premium') {
    return (
      <HeaderText>
        <HeaderHeading>Premium Package</HeaderHeading>
      </HeaderText>
    )
  }

  if (location.pathname === '/services/website') {
    return (
      <HeaderText>
        <HeaderHeading>Website Creation</HeaderHeading>
      </HeaderText>
    )
  }
}

const Header = ({ location }) => (
  <Spring
    from={{ height: location.pathname === '/' ? 300 : 600 }}
    to={{ height: location.pathname === '/' ? 600 : 300 }}
  >
    {props => (
      <HeaderWrapper style={props}>
        <Nav />
        {DynamicHeaderText({ location })}
      </HeaderWrapper>
    )}
  </Spring>
)

Header.defaultProps = {
  location: {},
}

export default Header
