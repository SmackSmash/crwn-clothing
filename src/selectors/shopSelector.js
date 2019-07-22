import { createSelector } from 'reselect';

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
  [shopSelector],
  shop => shop.collections
);

export const selectIsFetching = createSelector(
  [shopSelector],
  shop => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(collection => collections[collection]) : []
);

export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );
};
