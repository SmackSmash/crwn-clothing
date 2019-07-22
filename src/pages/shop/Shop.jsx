import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../selectors/shopSelector';
import { fetchCollectionsStartAsync } from '../../actions';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, fetchCollectionsStart, fetchCollectionsStartAsync, loading }) => {
  document.title = 'CRWN :: Clothing | Shop';

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Route
        path={`${match.path}`}
        exact
        render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => <CollectionWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsFetching
});

export default connect(
  mapStateToProps,
  { fetchCollectionsStartAsync }
)(Shop);
