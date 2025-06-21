import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '@utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: {} };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((cartItem) => {
          return cartItem._id === existingItem._id ? item : cartItem;
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);

      // //Calculate items price
      // state.itemsPrice = Number(state.cartItems.reduce (
      //     (acc,currVal) => acc + +currVal * +currVal.qty,0
      // ).toFixed(2));

      // //Calculate shipping price
      // state.shippingPrice = Number(+state.itemsPrice > 10000 ? 0 : 10000).toFixed(2);

      // //Calculate tax price
      // // unary + operator => Number()
      // state.taxPrice = Number(0.28  * +state.itemsPrice).toFixed(2);

      // state.totalPrice  =
      // Number(+state.itemsPrice + +state.shippingPrice + +state.taxPrice).toFixed(2);

      // localStorage.setItem('cart',JSON.stringify(state));
      // //Browser settings
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload
      );

      return updateCart(state);
    },

    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  clearCartItems,
} = cartSlice.actions; //createSlice.reducer=actions

export default cartSlice.reducer;
