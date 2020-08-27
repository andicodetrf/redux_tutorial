import React from "react";
import { connect } from "react-redux";

function Articles(props) {
  //   console.log("props from article component", props);
  return (
    <div>
      <h1> Articles</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  //   console.log("state from article component: ", state);
  return {
    articles: state.articles,
    authors: state.authors,
  };
};

export default connect(mapStateToProps)(Articles);
