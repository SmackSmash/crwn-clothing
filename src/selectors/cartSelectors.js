import { createSelector } from 'reselect';

// Define function splitting off a piece of state
const selectCart = state => state.cart;

// Memoze a subset of the previously defined piece of state
// THESE ARE FUNCTIONS THAT ARE IMPORTED AND CALLED IN
// mapStateToProps WITH THE CURRENT STATE!!!!
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Memozie an operation performed on the aforementioned subset
// THESE ARE FUNCTIONS THAT ARE IMPORTED AND CALLED IN
// mapStateToProps WITH THE CURRENT STATE!!!!
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);
