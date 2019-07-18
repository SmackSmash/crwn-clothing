import React from 'react';
import './CollectionItem.scss';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import CustomButton from '../custom-button/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">&pound;{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
