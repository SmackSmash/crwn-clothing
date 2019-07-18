import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)}
      </span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
