import React from 'react'
import styled from 'styled-components'
import { HeadingStyleLight, SubHeadingStyleLight } from './styles/TextStyles'
import { device } from './styles/MediaQueries'
import SelectBox from './selectBox'

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

const FormSubHeading = styled(SubHeadingStyleLight)`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
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
    border-radius: 3px;
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
    <FormSubHeading>
      Online marketing can be stressful, we are here to help. Tell us your
      questions and concerns and we will guide you in the right direction.
    </FormSubHeading>
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
      <SelectBox
        items={[
          { value: 'Standard SEO', id: 1 },
          { value: 'Premium SEO', id: 2 },
          { value: 'Standard Website', id: 3 },
          { value: 'Premium Website', id: 4 },
          { value: 'Custom Package', id: 5 },
          { value: 'Cancelling Services', id: 6 },
        ]}
      />
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
