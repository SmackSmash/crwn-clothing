import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../actions';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';
import CollectionContainer from '../collection/Collection.container';

const Shop = ({ match, fetchCollectionsStartAsync }) => {
  document.title = 'CRWN :: Clothing | Shop';
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Route path={`${match.path}`} exact component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
    </div>
  );
};

export default connect(
  null,
  { fetchCollectionsStartAsync }
)(Shop);
