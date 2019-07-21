import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../selectors/cartSelectors';
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden } from '../../actions';
import * as S from './CartDropdown.styled';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const pushToCheckout = () => {
    dispatch(toggleCartHidden());
    history.push('/checkout');
  };

  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map(({ id, ...item }) => <CartItem key={id} {...item} />)
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItems>
      <S.CartCustomButton onClick={pushToCheckout} inverted>
        Go To Checkout
      </S.CartCustomButton>
    </S.CartDropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
