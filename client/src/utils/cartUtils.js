// export const updateCart =(state) => {
//     //Calculate items price
//     state.itemsPrice = Number(state.cartItems.reduce (
//     (acc,currVal) => acc + +currVal * +currVal.qty,0
//      ).toFixed(2));

//     //Calculate shipping price
//     state.shippingPrice = Number(+state.itemsPrice > 10000 ? 0 : 10000).toFixed(2);

//     //Calculate tax price
//     // unary + operator => Number()
//     state.taxPrice = Number(0.28  * +state.itemsPrice).toFixed(2);

//     state.totalPrice  = 
//     Number(+state.itemsPrice + +state.shippingPrice + +state.taxPrice).toFixed(2);


//     localStorage.setItem('cart',JSON.stringify(state));
//     //Browser settings 

//     return state;
// }


export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = Number(
    state.cartItems.reduce(
      (acc, currVal) => acc + +currVal.price * +currVal.qty,
      0
    )
  ).toFixed(2);

  // Calculate shipping price
  state.shippingPrice = Number(+state.itemsPrice > 5000 ? 0 : 100).toFixed(2);

  // Calculate tax price
  // unary + operator => Number()
  state.taxPrice = Number(0.28 * +state.itemsPrice).toFixed(2);

  state.totalPrice = Number(
    Number(state.itemsPrice) +
      Number(state.shippingPrice) +
      Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};

