import React from 'react';
import * as S from './CartItem.styled';

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <S.CartItem>
      <S.Image src={imageUrl} alt={name} />
      <S.ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x &pound;{price}
        </span>
      </S.ItemDetails>
    </S.CartItem>
  );
};

export default CartItem;
