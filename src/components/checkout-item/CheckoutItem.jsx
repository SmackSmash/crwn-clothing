import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItemFromCart } from '../../actions';
import * as S from './CheckoutItem.styled';

const CheckoutItem = ({
  item,
  item: { name, imageUrl, quantity, price },
  addItem,
  removeItem,
  clearItemFromCart
}) => {
  return (
    <S.CheckoutItem>
      <S.ImageContainer>
        <img src={imageUrl} alt={name} />
      </S.ImageContainer>
      <S.TextContainer>{name}</S.TextContainer>
      <S.QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </S.QuantityContainer>
      <S.TextContainer>&pound;{price}</S.TextContainer>
      <S.RemoveButton onClick={() => clearItemFromCart(item)}>&#10006;</S.RemoveButton>
    </S.CheckoutItem>
  );
};

export default connect(
  null,
  { addItem, removeItem, clearItemFromCart }
)(CheckoutItem);
