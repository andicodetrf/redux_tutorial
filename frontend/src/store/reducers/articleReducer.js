//reducers
let initState = {
  isLoading: true,
  articles: [],
};
const articles = (state = initState, action) => {
  switch (action.type) {
    case "ALL_POKEMONS":
      return { ...state, isLoading: false, articles: action.payload };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    // case "ADD_ARTICLE":
    //   return [...initialState, action.payload];
    default:
      return state;
  }
};

export default articles;
