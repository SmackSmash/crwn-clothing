import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../selectors/cartSelectors';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import { toggleCartHidden } from '../../actions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const pushToCheckout = () => {
    dispatch(toggleCartHidden());
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ id, ...item }) => <CartItem key={id} {...item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={pushToCheckout} inverted>
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
