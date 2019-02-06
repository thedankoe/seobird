import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { PencilIcon } from './styles/IconStyles'
import CheckoutEbook from './checkoutEbook'
import { HeadingStyle, SubHeadingStyle } from './styles/TextStyles'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`

export const Card = styled.div`
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
`

export const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

export const CardList = styled.ul`
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

const EbookCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Ebook</HeadingStyle>
      <SubHeadingStyle>
        <em>
          Get a Consistent Client Base: The Complete Digital Marketing Guide for
          Print &amp; Apparel Shops
        </em>
      </SubHeadingStyle>
      <CardParagraph>$47</CardParagraph>
      <CardList>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </CardList>
      <CheckoutEbook sku="sku_EJB64RuleF3sP8" />
    </Card>
    <Card>
      <HeadingStyle>Ebook + Website Analysis</HeadingStyle>
      <SubHeadingStyle>
        Our team will go through your website and give you actionable advice to
        optimize on-page SEO and how to improve content
      </SubHeadingStyle>
      <CardParagraph>$67</CardParagraph>
      <CardList>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </CardList>
      <CheckoutEbook sku="sku_EJVHVjTgu1wFzL" />
    </Card>
  </CardContainer>
)

export default EbookCard
