import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }: any) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4ZUsGDRVka9fAcucU0WsTl8n";

  const onToken = (token : any) => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout 
      name="Worn Clothing"
      label="Pay Now"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}

    />
  )

}

export default StripeCheckoutButton;