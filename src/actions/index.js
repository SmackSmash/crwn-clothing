import { actionTypes } from './types';

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
