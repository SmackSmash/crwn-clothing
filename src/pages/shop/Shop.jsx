import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';

const Shop = ({ match, updateCollections }) => {
  document.title = 'CRWN :: Clothing | Shop';

  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div>
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default connect(
  null,
  { updateCollections }
)(Shop);
