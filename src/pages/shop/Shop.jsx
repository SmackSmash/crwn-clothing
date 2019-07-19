import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';
import './Shop.scss';

const Shop = ({ match }) => {
  document.title = 'CRWN :: Clothing | Shop';
  return (
    <div className="shop-page">
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
