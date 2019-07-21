import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../selectors/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import * as S from './Collection.styled';

const Collection = ({ collection: { title, items } }) => {
  document.title = `CRWN :: Clothing | ${title}`;
  return (
    <S.CollectionPage>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.Items>
    </S.CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
