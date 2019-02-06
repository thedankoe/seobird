import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  FeedbackLinkStyle,
} from './styles/TextStyles'
import faqBGdesktop from '../images/frequently-asked-questions-desktop.jpg'
import { RightIcon } from './styles/IconStyles'
import { device } from './styles/MediaQueries'

const FAQwrapper = styled.div`
  width: 100%;
  padding: 3rem 0;
  background-image: linear-gradient(
      to right bottom,
      rgba(30, 197, 255, 0.9),
      rgba(3, 89, 117, 0.9)
    ),
    url(${faqBGdesktop});
  color: #fff;
  text-align: center;
`

const FAQcontainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.textSpace};
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 75%;
  }

  @media ${device.laptopL} {
    width: 90%;
  }

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

const FAQparagraph = styled(ParagraphStyle)`
  color: #eee;
`

const PricingCTAHeading = styled(HeadingStyle)`
  margin-top: ${props => props.theme.textSpace};
  :after {
    content: '';
    height: 1px;
    width: 150px;
    margin: 1.5rem auto 0 auto;
    background: ${props => props.theme.secondaryLight};
    display: block;
  }
`

const PricingCTALink = styled(FeedbackLinkStyle)`
  transform: translateY(0);
  &:hover {
    background: ${props => props.theme.secondaryLight};
    transform: translateY(0.3rem);
  }
`

const FAQSection = () => (
  <FAQwrapper>
    <HeadingStyle>Frequently Asked Questions</HeadingStyle>
    <FAQcontainer>
      <div>
        <SubHeadingStyle>How long is the contract?</SubHeadingStyle>
        <FAQparagraph>
          The standard option is month-to-month and the <em>Premium</em> option
          is for 12 months as it includes a conversion-centered website.
        </FAQparagraph>
      </div>
      <div>
        <SubHeadingStyle>What if I just want a website?</SubHeadingStyle>
        <FAQparagraph>
          We can do this for you! Remember, a website without targeted traffic
          is as good as a business without customers BUT having any sort of
          online presence is a must in this market.
        </FAQparagraph>
      </div>
      <div>
        <SubHeadingStyle>What if I have a higher budget?</SubHeadingStyle>
        <FAQparagraph>
          That is perfect, we can always scale our services for your practice to
          see even better results. Contact us to see how a higher budget can
          impact growth.
        </FAQparagraph>
      </div>
      <div>
        <SubHeadingStyle>Do you have any cheaper options?</SubHeadingStyle>
        <FAQparagraph>
          Not at this moment, but we would love to talk more and work something
          out. We can scale our services down to a degree, but this is currently
          the smallest budget needed to see amazing growth.
        </FAQparagraph>
      </div>
    </FAQcontainer>
    <PricingCTAHeading>Let's kickstart your growth</PricingCTAHeading>
    <PricingCTALink to="/contact">
      Contact Us
      <RightIcon />
    </PricingCTALink>
  </FAQwrapper>
)

export default FAQSection
