import React from 'react'
import styled from 'styled-components'
import { HeadingStyle } from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const FormWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.sectionSpace} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormHeading = styled(HeadingStyle)`
  color: #fff;
  text-align: center;
  margin-bottom: ${props => props.theme.textSpace};
`

const FormGroup = styled.div`
  width: 100%;
  label {
    color: #fff;
    transform: translateY(3rem);
    display: none;
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
      font-family: Raleway, sans-serif;
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
  background: ${props => props.theme.secondary};
  font-size: 1.8rem;
  color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  transition: all ease 0.3s;
  :hover {
    cursor: pointer;
    background: ${props => props.theme.secondaryLight};
    box-shadow: ${props => props.theme.bsHover};
    transform: translateY(0.5rem);
  }
`

const ContactForm = () => (
  <FormWrapper>
    <FormHeading>Ready to get started? Have questions or concerns?</FormHeading>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success"
      netlify-honeypot="bot-field"
    >
      <FormGroup>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="business">Business Name</label>
        <input
          type="text"
          name="business"
          id="business"
          placeholder="Business Name"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="choice">Marketing Option</label>
        <select name="choice" id="choice">
          <option value="standard">Standard Marketing</option>
          <option value="premium">Premium Marketing + Website</option>
        </select>
      </FormGroup>
      <FormGroup>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Need more info?"
        />
      </FormGroup>
      <FormButton type="submit">Submit</FormButton>
    </form>
  </FormWrapper>
)

export default ContactForm
