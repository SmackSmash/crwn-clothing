import React from 'react';
import './CartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../actions';
import { selectCartItemsCount } from '../../utils/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
