import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../selectors/shopSelector';
import './Shop.scss';

const Shop = ({ collections }) => {
  document.title = 'CRWN :: Clothing | Shop';

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
