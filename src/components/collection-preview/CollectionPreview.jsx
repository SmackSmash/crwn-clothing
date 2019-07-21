import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/CollectionItem';
import * as S from './CollectionPreview.styled';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <S.CollectionPreview>
      <S.Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </S.Title>
      <S.Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </S.Preview>
    </S.CollectionPreview>
  );
};

export default withRouter(CollectionPreview);
