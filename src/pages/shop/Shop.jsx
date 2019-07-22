import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, updateCollections }) => {
  document.title = 'CRWN :: Clothing | Shop';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);

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

export default connect(
  null,
  { updateCollections }
)(Shop);
