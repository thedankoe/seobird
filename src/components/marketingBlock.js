import React from 'react'
import styled from 'styled-components'
import { SubHeadingStyle, ParagraphStyle } from './styles/TextStyles'

const MarketingBlockSub = styled(SubHeadingStyle)`
  display: flex;
  align-items: center;
`

const MarketingParagraph = styled(ParagraphStyle)`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`

const MarketingBlock = props => {
  const { icon, heading, text, subText } = props
  return (
    <div>
      <MarketingBlockSub>
        {icon}
        {heading}
      </MarketingBlockSub>
      <MarketingParagraph>{text}</MarketingParagraph>
      <MarketingParagraph>{subText}</MarketingParagraph>
    </div>
  )
}

export default MarketingBlock
