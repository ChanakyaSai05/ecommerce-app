export const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVEFROMCART":
      let newCart = [...state.cart];
      newCart.splice(action.payload, 1);
      return { ...state, cart: newCart };
    case "EMPTYCART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};
export default cartReducer;
