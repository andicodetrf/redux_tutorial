//actions
export const getArticles = () => {
  return {
    type: "ALL_ARTICLES",
    payload: ["one", "two", "three"],
  };
};
//sync actions only
export const addArticle = (info) => {
  return {
    type: "ADD_ARTICLE",
    payload: info,
  };
};
//https://pokeapi.co/api/v2/pokemon/1

//async actions only
export const getPokemons = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  fetch("https://randomuser.me/api/?results=15")
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
//   return function (dispatch) {
//     dispatch({
//       type: "ALL_POKEMONS",
//       payload: ["one", "two", "three"],
//     });
//   };
// };
