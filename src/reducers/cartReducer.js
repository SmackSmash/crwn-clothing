import { actionTypes } from '../actions/types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  }
  return cartItems.map(item =>
    item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id);
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case actionTypes.ADD_ITEM:
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    case actionTypes.REMOVE_ITEM:
      return { ...state, cartItems: removeItemFromCart(state.cartItems, action.payload) };
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return { ...state, cartItems: clearItemFromCart(state.cartItems, action.payload) };
    default:
      return { ...state };
  }
};
