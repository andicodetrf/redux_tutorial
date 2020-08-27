import { combineReducers } from "redux";
import authors from "./authorReducer";
import articles from "./articleReducer";

export default combineReducers({
  articles,
  authors,
});
