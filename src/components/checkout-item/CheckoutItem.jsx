import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItemFromCart } from '../../actions';
import './CheckoutItem.scss';

const CheckoutItem = ({
  item,
  item: { name, imageUrl, quantity, price },
  addItem,
  removeItem,
  clearItemFromCart
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div onClick={() => removeItem(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
      </div>
      <div className="price">&pound;{price}</div>
      <div onClick={() => clearItemFromCart(item)} className="remove-button">
        &#10006;
      </div>
    </div>
  );
};

export default connect(
  null,
  { addItem, removeItem, clearItemFromCart }
)(CheckoutItem);
