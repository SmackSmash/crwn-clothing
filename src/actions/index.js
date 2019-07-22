import { actionTypes } from './types';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';

export const setCurrentUser = user => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user
  };
};

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN
  };
};

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: actionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};

export const updateCollections = collections => {
  return {
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collections
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
  };
};

export const fetchCollectionsFailure = error => {
  return { type: actionTypes.FETCH_COLLECTIONS_FAILURE, payload: error };
};

export const fetchCollectionsStartAsync = () => dispatch => {
  dispatch(fetchCollectionsStart());
  const collectionRef = firestore.collection('collections');
  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error)));
};
