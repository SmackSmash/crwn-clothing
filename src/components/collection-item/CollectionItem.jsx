import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';
import * as S from './CollectionItem.styled';

const CollectionItem = ({ item, item: { name, price, imageUrl }, addItem }) => {
  return (
    <S.CollectionItem>
      <S.CollectionItemImage imageUrl={imageUrl} />
      <S.CollectionFooter>
        <S.Name>{name}</S.Name>
        <S.Price>&pound;{price}</S.Price>
      </S.CollectionFooter>
      <S.CollectionItemButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </S.CollectionItemButton>
    </S.CollectionItem>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
