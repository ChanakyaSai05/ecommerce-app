import { combineReducers } from "redux";
import cartReducer from "./cart";
import searchReducer from "./searchevent";

const allReducers = combineReducers({
  cart: cartReducer,
  search: searchReducer,
});
export default allReducers;
