import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../selectors/shopSelector';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.scss';

const Collection = ({ match, collection }) => {
  console.log(match.params.collectionId);
  console.log(collection);
  return (
    <div className="collection-page">
      <h1 className="title">Collection Page</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
