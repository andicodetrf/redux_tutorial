//actions
export const getAuthors = () => {
  return {
    type: "ALL_AUTHORS",
    payload: ["one", "two", "three"],
  };
};

export const addAuthor = (author) => {
  return {
    type: "ADD_AUTHOR",
    payload: author,
  };
};
