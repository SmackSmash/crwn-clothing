import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../selectors/cartSelectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import * as S from './Checkout.styled';

const Checkout = ({ cartItems, total }) => {
  document.title = 'CRWN :: Clothing | Checkout';
  return (
    <S.CheckoutPage>
      <S.CheckoutHeader>
        <S.HeaderBlock>
          <span>Product</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Description</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Quantity</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Price</span>
        </S.HeaderBlock>
        <S.HeaderBlock>
          <span>Remove</span>
        </S.HeaderBlock>
      </S.CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <S.Total>
        <span>Total: &pound;{total}</span>
      </S.Total>
      <S.TestWarning>
        <span>4242 4242 4242 4242</span>
        <br />
        <span>Exp: 01/20 --- CW: 123</span>
      </S.TestWarning>
      <StripeButton price={total} />
    </S.CheckoutPage>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
