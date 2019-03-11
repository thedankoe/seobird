import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from './MediaQueries'

const HeadingStyle = styled.h2`
  margin-bottom: ${props => props.theme.textSpace};
  text-transform: capitalize;
  font-size: 3.8rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  text-align: center;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;

    @media ${device.tabletS} {
      margin: 1.5rem 0 0 0;
    }
  }
  span {
    font-weight: 600;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletL} {
    font-size: 2.5rem;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const HeadingStyleLight = styled.h2`
  margin-bottom: ${props => props.theme.textSpace};
  text-transform: capitalize;
  font-size: 3.8rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;

    @media ${device.tabletS} {
      margin: 1.5rem 0 0 0;
    }
  }
  span {
    font-weight: 600;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletL} {
    font-size: 2.5rem;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const SubHeadingStyle = styled.h3`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  color: ${props => props.theme.primary};
`

const UltraSubHeadingStyle = styled.h4`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  color: ${props => props.theme.primary};
`

const SubHeadingStyleLight = styled.h3`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  color: #fff;
`

const ParagraphStyle = styled.p`
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;
  span {
    font-weight: 600;
  }
`

const ParagraphStyleLight = styled.p`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  span {
    font-weight: 600;
  }
`

const LinkStyle = styled(Link)`
  width: 15rem;
  margin: 0 auto;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.3s;
  &:hover {
    box-shadow: ${props => props.theme.bsHover};
    background: ${props => props.theme.secondaryLight};
    transform: translateY(3px);
    svg {
      transform: translateX(0.5rem);
      transition: all ease 0.3s;
    }
  }
`

const PlainLink = styled(Link)`
  color: ${props => props.theme.CTA};
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all ease 0.3s;
  :hover {
    color: ${props => props.theme.CTAHover};
  }
  svg {
    transform: translateX(0.5rem);
  }
`

const ColoredLink = styled(Link)`
  color: ${props => props.theme.CTA};
  font-size: 2.2rem;
  font-weight: 500;
  transition: all ease 0.3s;
  :hover {
    color: ${props => props.theme.CTAHover};
  }
`

const HeaderLinkStyle = styled(LinkStyle)`
  margin: 0;
  padding: 1rem;
  background: ${props => props.theme.secondary};
  transform: translateY(1.5rem);
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(1.8rem);
    svg {
      transform: translateX(0);
    }
  }
`

const CheckoutButton = styled.button`
  width: 100%;
  margin: 2rem auto 0 auto;
  padding: 4rem;
  background: ${props => props.theme.CTA};
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  cursor: pointer;
  transition: all ease 0.3s;
  :hover {
    background: ${props => props.theme.CTAHover};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.3rem);
  }
`

const CheckoutLink = styled(Link)`
  display: block;
  width: 100%;
  margin: 2rem auto 0 auto;
  padding: 4rem;
  background: ${props => props.theme.CTA};
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
  border: none;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  transition: all ease 0.3s;
  :hover {
    background: ${props => props.theme.CTAHover};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.3rem);
  }
`

const SecondaryLinkStyle = styled(LinkStyle)`
  margin: 1rem 0 0 0;
  background: ${props => props.theme.secondary};
  border-radius: 5px;
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(3px);
    svg {
      transform: translateX(0.5rem);
    }
  }
`

const FeedbackLinkStyle = styled(LinkStyle)`
  width: 17rem;
  padding: 1rem;
  background: ${props => props.theme.CTA};
  transform: translateY(2.5rem);
  &:hover {
    background: ${props => props.theme.CTAHover};
    transform: translateY(2.8rem);
  }
`

const ProblemLink = styled(FeedbackLinkStyle)`
  width: 28rem;
  transform: translateY(0);
  :hover {
    transform: translateY(0.3rem);
  }
`

export {
  HeadingStyle,
  HeadingStyleLight,
  SubHeadingStyle,
  UltraSubHeadingStyle,
  SubHeadingStyleLight,
  ParagraphStyle,
  ParagraphStyleLight,
  LinkStyle,
  SecondaryLinkStyle,
  FeedbackLinkStyle,
  HeaderLinkStyle,
  CheckoutButton,
  CheckoutLink,
  ProblemLink,
  PlainLink,
  ColoredLink,
}
