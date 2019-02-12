import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  SubHeadingStyle,
} from './styles/TextStyles'
import { PencilIcon } from './styles/IconStyles'

const ProcessWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;
`

const ProcessList = styled.ol`
  margin: ${props => props.theme.textSpace} 0
    ${props => props.theme.sectionSpace} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProcessListContainer = styled.div`
  width: 60%;
  padding: 1.5rem 3rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`

const ProcessListItem = styled.li`
  text-align: left;
  font-size: 2.5rem;
  font-weight: 600;
  span {
    font-size: 2.2rem;
    font-weight: 500;
    display: block;
  }
`

const ProcessListIcon = styled(PencilIcon)`
  font-size: 3rem;
  margin-right: 3rem;
`

const Process = () => (
  <ProcessWrapper>
    <HeadingStyle>Our process</HeadingStyle>
    <SubHeadingStyle>
      Our team is comprised of experts in all of the services explained above,
      once a package or individual service is purchased we get to work right
      away. The sooner we get started the faster your growth starts.
    </SubHeadingStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 1
          <span>
            A package is purchased, you will get an email receipt and be
            redirected to fill out a form with your information. If you
            purchased a website or the premium package, you will be emailed a
            contract to sign.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 2
          <span>
            Our team will immediately start analysing your website and social
            media. We prioritize areas that will affect SEO the most and work on
            optimizing them.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 3
          <span>
            We start researching keywords and what your competitors are doing
            right and wrong, we correct the mistakes and start creating content
            targeted towards interested customers.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 4
          <span>
            We produce content articles to ensure organic growth, create landing
            pages to collect emails, and start adjusting our strategy according
            to reported analytics.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 5
          <span>
            Fine-tune and repeat, we send our plan of action along with a
            monthly ROI report to you.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you aren't satisfied with your growth in the first month we give you
      your money back. SEO takes well over a month to see long term growth but
      we are confident you will love our services.
    </ParagraphStyle>
  </ProcessWrapper>
)

export default Process
