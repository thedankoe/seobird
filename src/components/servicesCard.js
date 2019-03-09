import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeaderLinkStyle,
  ColoredLink,
} from './styles/TextStyles'

export const CardContainer = styled.div`
  margin: ${props => props.theme.textSpace} 0;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  width: 50%;
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.laptop} {
    width: 70%;
    :not(:last-child) {
      margin-right: 0;
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 100%;
  }
`

export const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

export const CardList = styled.ul`
  width: 80%;
  margin: ${props => props.theme.textSpace} auto;
  border-radius: 3px;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;
  svg {
    margin-right: 2rem;
    font-size: 3rem;
  }
  li {
    display: flex;
    align-items: center;
    text-align: left;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

export const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const ServicesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Standard</HeadingStyle>
      <SubHeadingStyle>
        Affordable SEO consulting for businesses that want to test if SEO will
        work for them.
      </SubHeadingStyle>
      <CardParagraph>$399/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done With You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will impact growth the most when fixed are prioritized
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          A descriptive monthly checklist with prioritized actions and how to
          implement them
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Content article ideas, social media strategy, and website optimization
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          A monthly strategy and ROI report describing how we plan to continue
          growth
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Access to your project on Notion to keep an eye on our progress
        </li>
      </CardList>
      <CardLink to="/services/standard">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Premium</HeadingStyle>
      <SubHeadingStyle>
        For businesses that are tight on time that want the most return on
        investment.
      </SubHeadingStyle>
      <CardParagraph>$799/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will impact growth the most when fixed are prioritized
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          We do the work for you, you sit back and enjoy your online growth
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Weekly content writing, citation building, and copywriting for all
          pages included
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          A monthly strategy and ROI report describing how we plan to continue
          growth
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Access to your project on Notion to keep an eye on our progress
        </li>
      </CardList>
      <CardLink to="/services/premium">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default ServicesCard
