import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';

const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
