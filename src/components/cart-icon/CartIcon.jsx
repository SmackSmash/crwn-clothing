import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon);
