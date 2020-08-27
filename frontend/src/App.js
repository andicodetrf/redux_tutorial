import React from "react";

import "./App.css";
import { connect } from "react-redux";
import { addArticle } from "./store/actions/articles";
import Articles from "./Articles";

function App(props) {
  // console.log(props);
  // console.log("store:", props.articles);
  return (
    <div className="App">
      <h1>Dont be Sad there is tomorrow</h1>
      <button onClick={() => props.addArticle("one")}> Add Article </button>
      <Articles />
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    articles: state.articles,
    authors: state.authors,
  };
};

export default connect(mapStateToProps, { addArticle })(App);
