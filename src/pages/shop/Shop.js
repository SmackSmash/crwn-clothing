import React, { Component } from 'react';
import data from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

class Shop extends Component {
  state = {
    collections: data
  };

  componentDidMount() {
    document.title = 'CRWN :: Clothing | Shop';
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection} />
        ))}
      </div>
    );
  }
}

export default Shop;
