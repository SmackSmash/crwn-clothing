import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './StripeButton.scss';

const StripeButton = ({ price }) => {
  const PUBLISHABLE_KEY = 'pk_test_cuPBr793HwGLujiDVIMhv8GF00dBp7FriS';
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <StripeCheckout
      panelLabel="Pay now"
      name="CRWN :: Clothing"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      currency="GBP"
      stripeKey={PUBLISHABLE_KEY}
      token={onToken}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeButton;
