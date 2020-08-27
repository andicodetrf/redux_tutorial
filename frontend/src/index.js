import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import articles from "./store/reducers/articleReducer";
import { Provider } from "react-redux";
//store
let store = createStore(articles);

//subscribe to store
// store.subscribe(() => console.log(store.getState()));

// //dispatch
// store.dispatch(getArticles());
// store.dispatch(addArticle("four"));
// store.dispatch(addArticle("five"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
