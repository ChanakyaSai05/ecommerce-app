const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDTOCART":
      return [...state, action.payload];
    case "REMOVEFROMCART":
      let newCart = [...state];
      newCart.splice(action.payload, 1);
      return newCart;
    case "EMPTYCART":
      return [];
    case "CARTINC":
      console.log(action.payload.price);
      let newCartInc = [...state];
      newCartInc[action.payload.index].price =
        newCartInc[action.payload.index].price + action.payload.price;
      return newCartInc;
    case "CARTDEC":
      let newCartDec = [...state];
      newCartDec[action.payload.index].price =
        newCartDec[action.payload.index].price - action.payload.price;
      return newCartDec;
    default:
      return state;
  }
};
export default cartReducer;
