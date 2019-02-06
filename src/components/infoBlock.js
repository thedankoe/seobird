import React from 'react'
import styled from 'styled-components'
import { ParagraphStyle, SubHeadingStyleLight } from './styles/TextStyles'

const InfoContainer = styled.div`
  text-align: center;
`

const InfoParagraph = styled(ParagraphStyle)`
  color: ${props => props.theme.lightGrey};
`

const InfoBlock = props => {
  const { icon, heading, text } = props
  return (
    <InfoContainer>
      {icon}
      <SubHeadingStyleLight>{heading}</SubHeadingStyleLight>
      <InfoParagraph>{text}</InfoParagraph>
    </InfoContainer>
  )
}

export default InfoBlock
