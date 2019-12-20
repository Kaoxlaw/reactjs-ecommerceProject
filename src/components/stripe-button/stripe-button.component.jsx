import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckouButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_SYprUIJqbGDrvNxwHgsHGZAs00ZsLedrh3';

  const onToken = token => {
    console.log(token);
    alert('Payement Successful');
  };

  return (
    <StripeCheckout
      label="PAy NoW"
      name="eReact Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckouButton;
