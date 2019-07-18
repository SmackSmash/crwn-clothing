import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  hidden: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return { ...state };
  }
};
