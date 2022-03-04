import { combineReducers } from "redux";
import cartReducer from "./cart";
import counterReducer from "./counter";
import searchReducer from "./searchevent";

const allReducers = combineReducers({
  cart: cartReducer,
  counter: counterReducer,
  search: searchReducer,
});
export default allReducers;
