import React from 'react'
import styled from 'styled-components'
import { HeadingStyleLight, SubHeadingStyleLight } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const FormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormStyle = styled.form`
  margin-top: ${props => props.theme.textSpace};
`

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  input {
    :focus {
      border-bottom: 3px solid ${props => props.theme.success};
    }
    :focus:invalid {
      border-bottom: 3px solid ${props => props.theme.warning};
    }
  }
  input,
  textarea {
    width: 80rem;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.4);
    border: none;
    color: #fff;
    font-family: Raleway, sans-serif;
    font-size: 1.8rem;

    @media ${device.tablet} {
      width: 60rem;
    }

    @media ${device.tabletS} {
      width: 40rem;
    }

    :focus {
      outline: none;
    }
    ::placeholder {
      font-family: Roboto, sans-serif;
      font-size: 1.8rem;
      color: ${props => props.theme.lightGrey};
    }
  }
  select {
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    font-family: Raleway, sans-serif;
    font-size: 1.8rem;
    color: ${props => props.theme.lightGrey};
    option {
      background: rgba(0, 0, 0, 0.2);
      font-family: Raleway, sans-serif;
      font-size: 1.8rem;
      color: ${props => props.theme.lightGrey};
    }
  }
  :not(:last-child) {
    margin-bottom: ${props => props.theme.textSpace};
  }
`

const FormButton = styled.button`
  padding: 1.5rem 2rem;
  background: ${props => props.theme.CTA};
  font-size: 1.8rem;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  transition: all ease 0.3s;
  :hover {
    cursor: pointer;
    background: ${props => props.theme.CTAHover};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.5rem);
  }
`

const ContactForm = () => (
  <FormWrapper>
    <HeadingStyleLight>Request an appointment</HeadingStyleLight>
    <SubHeadingStyleLight>
      Online marketing can be stressful, we are here to help. Tell us your
      questions and concerns and we will guide you in the right direction.
    </SubHeadingStyleLight>
    <FormStyle
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <FormGroup>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@gmail.com"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="business">Business Name</label>
        <input
          type="text"
          name="business"
          id="business"
          placeholder="John Doe Chiropractic"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="choice">Package Option Interested In</label>
        <select name="choice" id="choice">
          <option value="basicSEO">Basic SEO</option>
          <option value="standardSEO">Standard SEO</option>
          <option value="premiumSEO">Premium SEO</option>
          <option value="basicSite">Basic Website</option>
          <option value="standardSite">Standard Website</option>
          <option value="premiumSite">Premium Website</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="message">Questions or Concerns</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Need more info?"
        />
      </FormGroup>
      <FormButton type="submit">Submit</FormButton>
    </FormStyle>
  </FormWrapper>
)

export default ContactForm
