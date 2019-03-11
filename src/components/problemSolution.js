import React from 'react'
import styled from 'styled-components'
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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
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

  h2 {
    ::after {
      @media ${device.tabletS} {
        margin: 1.5rem auto 0 auto;
      }
    }
    @media ${device.tabletS} {
      text-align: center;
    }
  }
`

const ProbContainerBlue = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }
`

export const ParagraphSecondary = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
  text-align: center;

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ParagraphBlue = styled(ParagraphStyle)`
  color: #fff;
  margin-bottom: ${props => props.theme.textSpace};
  text-align: center;

  @media ${device.tabletS} {
    text-align: left;
  }
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

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
    align-items: flex-start;
  }
`

const ProblemListItem = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  div {
    width: 3rem;
  }
`

const ProblemSolution = () => (
  <>
    <ProblemWrapper>
      <ProblemContainer>
        <HeadingStyle>You don't have enough time</HeadingStyle>
        <ParagraphStyle>
          Expensive SEO agencies guide you through a painful process to start
          working on SEO. The reason for hiring them in the first place is to
          save time and not have to learn it yourself, right?
        </ParagraphStyle>
        <ParagraphSecondary>
          What if their SEO strategy isn't the best for your business? Then it's
          time to cancel and move on to the next glorified service to grow your
          business. The cycle continues.
        </ParagraphSecondary>
      </ProblemContainer>
    </ProblemWrapper>
    <WrapperBlue>
      <ProbContainerBlue>
        <HeadingStyleLight>
          Most marketing strategies are inefficient
        </HeadingStyleLight>
        <ParagraphBlue>
          Long drawn out sign up processes are unnecessary. With a package based
          system, SEO and online marketing can still be tailored to your
          business. Here's what it would look like:
        </ParagraphBlue>
        <ProblemList>
          <ProblemListItem>
            <div>
              <CheckMark />
            </div>
            <span>Services that result in the most growth are prioritized</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CheckMark />
            </div>
            <span>Services that don't work are refactored and tested</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CheckMark />
            </div>
            <span>The sign up process is streamlined and affordable</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CheckMark />
            </div>
            <span>Stay updated with monthly ROI reports and checklists</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CheckMark />
            </div>
            <span>You can always request appointments and phone calls</span>
          </ProblemListItem>
        </ProblemList>
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
        Detail on our services
        <RightIcon />
      </ProblemLink>
    </WrapperBlue>
  </>
)

export default ProblemSolution
