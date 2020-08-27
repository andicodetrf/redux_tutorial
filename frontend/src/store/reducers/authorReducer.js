//reducers
const authors = (initialState = [], action) => {
  switch (action.type) {
    case "ALL_AUTHORS":
      return (initialState = action.payload);
    case "ADD_AUTHOR":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};

export default authors;
