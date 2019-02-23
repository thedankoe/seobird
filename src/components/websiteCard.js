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
  span {
    color: ${props => props.theme.primaryLight};
    font-size: 2.2rem;
    font-weight: 400;
  }
`

const CardList = styled.ul`
  width: 80%;
  margin: ${props => props.theme.textSpace} auto;
  border-radius: 3px;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;
  svg {
    margin-right: 1rem;
    font-size: 3rem;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const WebsiteCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Basic</HeadingStyle>
      <SubHeadingStyle>
        A single page website or landing page for businesses that don't have
        one.
      </SubHeadingStyle>
      <CardParagraph>
        $299/month <span>plus tax</span>
      </CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done With You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will most increase growth when fixed are prioritized
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          A descriptive weekly checklist with prioritized actions and how to
          implement them
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          We give you monthly keywords to focus on and actionable advice to
          implement them
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
          Email marketing can be added on at anytime, this is an option when
          purchasing
        </li>
      </CardList>
      <CardLink to="/services/basic">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Standard</HeadingStyle>
      <SubHeadingStyle>
        For businesses that are tight on time and understand the need for SEO.
      </SubHeadingStyle>
      <CardParagraph>
        $599/month <span>plus tax</span>
      </CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will most increase growth when fixed are prioritized
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
          Bi-weekly content writing, daily Facebook posts, and copywriting for
          all pages included
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
          Email marketing can be added on at anytime, this is an option when
          purchasing
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
      <CardParagraph>
        $899/month <span>plus tax</span>
      </CardParagraph>
      <ParagraphStyle>
        Month to Month - <span>Done For You</span>
      </ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Problems that will most increase growth when fixed are prioritized
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
          Weekly content writing, daily social media posts (all platforms), and
          copywriting for all pages included
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
          Email marketing is included, weekly email campaigns with the right
          copy and offers
        </li>
      </CardList>
      <CardLink to="/services/premium">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default WebsiteCard
