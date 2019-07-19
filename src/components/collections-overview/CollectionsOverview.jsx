import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../selectors/shopSelector';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
  return collections.map(({ id, ...collection }) => <CollectionPreview key={id} {...collection} />);
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
