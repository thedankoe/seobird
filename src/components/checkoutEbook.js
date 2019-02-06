import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutEbook = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_fQH2dQRYolaDCqg57vKo3gMX', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { sku } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
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
        Purchase
      </CheckoutButton>
    )
  }
}

export default CheckoutEbook
