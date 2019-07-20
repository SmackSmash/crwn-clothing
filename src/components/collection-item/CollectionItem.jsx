import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import CustomButton from '../custom-button/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item, item: { name, price, imageUrl }, addItem }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">&pound;{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted className="custom-button">
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
