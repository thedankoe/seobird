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
    width: 47rem;
    font-size: 3.2rem;
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
    width: 47rem;
    font-size: 2.2rem;
  }
`

const Header = ({ location, headerText }) => (
  <Spring
    from={{ height: location.pathname === '/' ? 300 : 600 }}
    to={{ height: location.pathname === '/' ? 600 : 300 }}
  >
    {props => (
      <HeaderWrapper style={props}>
        <Nav />
        {location.pathname === '/' ? (
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
        ) : (
          <HeaderText>
            <HeaderHeading>{headerText}</HeaderHeading>
          </HeaderText>
        )}
      </HeaderWrapper>
    )}
  </Spring>
)

Header.defaultProps = {
  location: {},
}

export default Header
