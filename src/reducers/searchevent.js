const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "EVENT":
      return action.payload;
    default:
      return state;
  }
};
export default searchReducer;
