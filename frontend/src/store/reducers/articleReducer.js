//reducers
const articles = (initialState = [], action) => {
  switch (action.type) {
    case "ALL_ARTICLES":
      return (initialState = action.payload);
    case "ADD_ARTICLE":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};

export default articles;
