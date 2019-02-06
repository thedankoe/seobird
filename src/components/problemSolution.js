import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  ProblemLink,
  HeadingStyleLight,
} from './styles/TextStyles'
import { CheckMark, RightIcon } from './styles/IconStyles'
import LeadSection from './leadSection'
import InfoSection from './infoSection'

const ProblemWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const ProblemContainer = styled.div`
  padding: ${props => props.theme.textSpace} 0;
`

const WrapperBlue = styled.div`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.textSpace} 0;
  background: linear-gradient(
    to right bottom,
    ${props => props.theme.primaryLight},
    ${props => props.theme.primary}
  );
  color: #fff;
`

const ProbContainerBlue = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const ParagraphOrange = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
`

const ParagraphBlue = styled(ParagraphStyle)`
  color: #fff;
  margin-bottom: ${props => props.theme.textSpace};
  text-align: center;
`

const ParagraphBlueBold = styled(ParagraphStyle)`
  color: #fff;
  margin: ${props => props.theme.textSpace} 0;
  font-weight: 500;
  text-align: center;
`

const ProblemList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  padding: ${props => props.theme.textSpace} 1.5rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProblemListItem = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const ProblemSolution = () => (
  <>
    <ProblemWrapper>
      <ProblemContainer>
        <HeadingStyle>Put a spotlight on your best salesman</HeadingStyle>
        <ParagraphStyle>
          Who's your best salesman? Your website! There are an unrighteous
          amount of business owners that neglect their website, this is a major
          issue when it comes to expanding your business and getting new
          customers.
        </ParagraphStyle>
        <ParagraphOrange>
          The market is extremely competitive. Without targeted content, it's
          like your website isn't even there.
        </ParagraphOrange>
      </ProblemContainer>
    </ProblemWrapper>
    <WrapperBlue>
      <ProbContainerBlue>
        <HeadingStyleLight>
          People aren't finding your business
        </HeadingStyleLight>
        <ParagraphBlue>
          Believe it or not, there are more customers out there looking for your
          business. Frankly it isn't up to them to find it. It's up to you.
          Online marketing is not a cost but an investment. What happens when:
        </ParagraphBlue>
        <ProblemList>
          <ProblemListItem>
            <CheckMark />
            <span>Your site doesn't show up</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>
              They find your website but click away after a 3 second load time
            </span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your social media accounts don't display what they want</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your ads don't even show up for them</span>
          </ProblemListItem>
          <ProblemListItem>
            <CheckMark />
            <span>Your competitor just sent them a discount code</span>
          </ProblemListItem>
        </ProblemList>
        <ProblemLink to="/services/website">
          In the market for a website?
          <RightIcon />
        </ProblemLink>
      </ProbContainerBlue>
    </WrapperBlue>
    <LeadSection />
    <WrapperBlue>
      <HeadingStyleLight>How we can help</HeadingStyleLight>
      <InfoSection />
      <ParagraphBlueBold>
        Our services get your business on the map and keep it there. Not
        convinced yet?
      </ParagraphBlueBold>
      <ProblemLink to="/services">
        Here's more detail on our services
        <RightIcon />
      </ProblemLink>
    </WrapperBlue>
  </>
)

export default ProblemSolution
