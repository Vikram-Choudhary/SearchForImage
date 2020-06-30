import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { app } from "./ActionCreater/appActionCreater";

function App() {
  const handle = (e) => {
    console.log("-->", e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onClick={handle} />
      </header>
    </div>
  );
}
const mapStateToProps = (state) => ({});
//const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, { app })(App);
