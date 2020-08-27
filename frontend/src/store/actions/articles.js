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
