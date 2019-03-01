import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutPackage = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_live_tUH1wM8GGUIsI22trDRHJ4tv', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { plan } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ plan, quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    return (
      <CheckoutButton
        type="button"
        onClick={event => this.redirectToCheckout(event)}
      >
        Purchase Package
      </CheckoutButton>
    )
  }
}

export default CheckoutPackage
