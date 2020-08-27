//actions
export const getArticles = () => {
  return {
    type: "ALL_ARTICLES",
    payload: ["one", "two", "three"],
  };
};

export const addArticle = (info) => {
  return {
    type: "ADD_ARTICLE",
    payload: info,
  };
};
//https://pokeapi.co/api/v2/pokemon/1

export const getPokemons = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      dispatch({
        type: "ALL_POKEMONS",
        payload: result.results,
      });
    });
};

// export const getPokemonNormal = function () {
//   return function () {
//     return {
//       type: "ALL_POKEMONS",
//       payload: ["one", "two", "three"],
//     };
//   };
// };
