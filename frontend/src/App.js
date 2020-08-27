import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <h1>Dont be Sad there is tomorrow</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(App);
