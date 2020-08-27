import React, { useEffect, Component } from "react";

import "./App.css";
import { connect } from "react-redux";
import { addArticle, getArticles } from "./store/actions/articles";
import Articles from "./Articles";

// function App(props) {
//   // console.log(props);
//   // console.log("store:", props.articles);
//   useEffect(() => {
//     props.getArticles();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Dont be Sad there is tomorrow</h1>
//       {props.articles.map((article, i) => (
//         <li key={i}>{article}</li>
//       ))}
//       <button onClick={() => props.addArticle("one")}> Add Article </button>
//       <Articles />
//     </div>
//   );
// }

// import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    return (
      <div className="App">
        <h1>Dont be Sad there is tomorrow</h1>
        {this.props.articles.map((article, i) => (
          <li key={i}>{article}</li>
        ))}
        <button onClick={() => this.props.addArticle("one")}>
          Add Article
        </button>
        <Articles />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    articles: state.articles,
    authors: state.authors,
  };
};

export default connect(mapStateToProps, { addArticle, getArticles })(App);
