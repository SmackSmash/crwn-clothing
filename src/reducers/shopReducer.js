import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  collections: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
