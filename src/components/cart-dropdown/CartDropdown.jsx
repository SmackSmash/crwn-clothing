import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../selectors/cartSelectors';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(({ id, ...item }) => (
          <CartItem key={id} {...item} />
        ))}
      </div>
      <CustomButton inverted>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return { cartItems: selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
