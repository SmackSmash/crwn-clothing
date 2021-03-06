import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  currentUser: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};
