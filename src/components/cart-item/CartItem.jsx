import React from 'react';
import './CartItem.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x &pound;{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
