import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import './styles/nav.css'
import { ToggleIcon } from './styles/IconStyles'
import Toggle from './toggle'
import NavLogo from '../images/seobird-logo-navigation.png'

const NavWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
`

const NavContainer = styled.nav`
  width: 50%;
  margin: 0 3rem 0 auto;
`

const Logo = styled(Link)`
  position: absolute;
  left: 2rem;
  top: 1.5rem;
  z-index: 10000;
`
const LogoImg = styled.img`
  width: 15rem;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  a {
    position: relative;
    text-decoration: none;
    color: #fff;
  }
  a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    margin-top: 5px;
    background-color: ${props => props.theme.secondaryLight};
    visibility: hidden;
    transform: scaleX(0) translateY(0.5rem);
    transition: ease 0.2s;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1) translateY(0.5rem);
  }
`

const NavToggleContainer = styled.nav`
  width: 100%;
`

const NavToggle = styled.button`
  margin-left: auto;
  margin-right: ${props => props.theme.textSpace};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const NavToggleList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 3rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavToggleItem = styled.li`
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  background: ${props => props.theme.primary};
  border-radius: 3px;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
  a {
    position: relative;
    text-decoration: none;
    color: #fff;
  }
  a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    margin-top: 5px;
    background-color: ${props => props.theme.secondaryLight};
    visibility: hidden;
    transform: scaleX(0) translateY(0.5rem);
    transition: ease 0.2s;
  }
  a:hover:before {
    visibility: visible;
    transform: scaleX(1) translateY(0.5rem);
  }
`

class Nav extends Component {
  state = {
    collapse: '',
  }

  componentDidMount() {
    const el = document.querySelector('.nav-wrapper')
    this.setState({ top: el.offsetTop, collapse: window.innerWidth })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate() {
    this.state.collapse = window.innerWidth
  }

  handleScroll = () => {
    this.setState({ scroll: window.scrollY })
  }

  render() {
    const { scroll, top, collapse } = this.state
    return (
      <NavWrapper
        className={scroll > top ? 'nav-scroll nav-wrapper' : 'nav-wrapper'}
      >
        {collapse >= 900 ? (
          <NavContainer>
            <NavList>
              <Logo to="/">
                <LogoImg src={NavLogo} alt="SEOBird logo" />
              </Logo>
              <NavItem>
                <Link to="/services">Services</Link>
              </NavItem>
              <NavItem>
                <Link to="/faq">FAQ</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog">Growth Tips</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">Contact Us</Link>
              </NavItem>
            </NavList>
          </NavContainer>
        ) : (
          <NavToggleContainer>
            <Logo to="/">
              PrintWeb<span>Marketing</span>
            </Logo>
            <Toggle>
              {({ on, toggle }) => (
                <>
                  <NavToggle type="button" onClick={toggle}>
                    <ToggleIcon />
                  </NavToggle>
                  {on && (
                    <NavToggleList on={on} toggle={toggle}>
                      <NavToggleItem>
                        <Link to="/services">Services</Link>
                      </NavToggleItem>
                      <NavToggleItem>
                        <Link to="/faq">FAQ</Link>
                      </NavToggleItem>
                      <NavToggleItem>
                        <Link to="/about">About</Link>
                      </NavToggleItem>
                      <NavToggleItem>
                        <Link to="/blog">Growth Tips</Link>
                      </NavToggleItem>
                      <NavToggleItem>
                        <Link to="/contact">Contact Us</Link>
                      </NavToggleItem>
                    </NavToggleList>
                  )}
                </>
              )}
            </Toggle>
          </NavToggleContainer>
        )}
      </NavWrapper>
    )
  }
}

export default Nav
