import React from 'react';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import './Shop.scss';

const Shop = props => {
  document.title = 'CRWN :: Clothing | Shop';

  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default Shop;
