import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './selectors/shopSelector';
import { addCollectionAndDocuments } from './firebase/firebase.utils';

class AddItems extends Component {
  componentDidMount() {
    console.log('AddItems Mounted');
    console.log(this.props.collectionsArray);
    addCollectionAndDocuments(
      'collections',
      this.props.collectionsArray.map(({ title, items }) => ({ title, items }))
    );
  }

  render() {
    return <div>AddItms</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
});

export default connect(mapStateToProps)(AddItems);
