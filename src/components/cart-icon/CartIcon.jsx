import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../selectors/cartSelectors';
import { toggleCartHidden } from '../../actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
