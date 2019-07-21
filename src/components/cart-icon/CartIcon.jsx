import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../selectors/cartSelectors';
import { toggleCartHidden } from '../../actions';
import * as S from './CartIcon.styled.js';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <S.CartIcon onClick={toggleCartHidden}>
      <S.ShoppingIcon />
      <S.ItemCount>{itemCount}</S.ItemCount>
    </S.CartIcon>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
