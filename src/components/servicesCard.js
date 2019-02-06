import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeaderLinkStyle,
} from './styles/TextStyles'

const CardContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  width: 33%;
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }
`

const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

const CardList = styled.ul`
  margin: ${props => props.theme.textSpace} 0;
  border-radius: 3px;
  list-style: none;
  font-size: 1.8rem;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`

const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const ServicesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Basic</HeadingStyle>
      <SubHeadingStyle>
        Affordable SEO consulting for businesses that want to test if SEO will
        work for them.
      </SubHeadingStyle>
      <CardParagraph>$349/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done With You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <CheckMark />
          Advanced SEO &amp; Keyword Research
        </li>
        <li>
          <CheckMark />
          Monthly Website Analysis &amp; Actionable Advice
        </li>
        <li>
          <CheckMark />
          Social Media Posts 3x/week
        </li>
        <li>
          <CheckMark />
          Monthly Content Writing
        </li>
        <li>
          <CheckMark />
          Copywriting Advice
        </li>
        <li>
          <CheckMark />
          Monthly SEO Strategy
        </li>
        <li>
          <CheckMark />
          Monthly ROI Report
        </li>
      </CardList>
      <CardLink to="/services/basic">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Standard</HeadingStyle>
      <SubHeadingStyle>
        For businesses that are tight on time and understand the need for SEO.
      </SubHeadingStyle>
      <CardParagraph>$799/month</CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <CheckMark />
          Advanced SEO &amp; Keyword Research
        </li>
        <li>
          <CheckMark />
          Website Optimization
        </li>
        <li>
          <CheckMark />
          Bi-Weekly Email Campaigns
        </li>
        <li>
          <CheckMark />
          Daily (weekday) Social Media Posts
        </li>
        <li>
          <CheckMark />
          Bi-Weekly Content Writing
        </li>
        <li>
          <CheckMark />
          Copywriting for All Pages
        </li>
        <li>
          <CheckMark />
          Monthly ROI Report
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
      <CardParagraph>$1499/month</CardParagraph>
      <ParagraphStyle>
        6 Month Contract - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <CheckMark />
          Advanced SEO &amp; Keyword Research
        </li>
        <li>
          <CheckMark />
          Website Optimization
        </li>
        <li>
          <CheckMark />
          Weekly Email Campaigns
        </li>
        <li>
          <CheckMark />
          Daily (weekday) Social Media Posts/Engagement
        </li>
        <li>
          <CheckMark />
          Weekly Content Writing
        </li>
        <li>
          <CheckMark />
          Copywriting for All Pages
        </li>
        <li>
          <CheckMark />
          Facebook Advertisements
        </li>
        <li>
          <CheckMark />
          Monthly ROI Report
        </li>
      </CardList>
      <CardLink to="/services/premium">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default ServicesCard
