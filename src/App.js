import React, { useEffect } from "react";
import "./App.css";
import Dog from "./components/Dog";
import { FetchApi } from "./actions/FetchAPI";
import { connect } from "react-redux";

const App = props => {
  useEffect(() => {
    props.FetchApi("https://dog.ceo/api/breeds/image/random");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Dog />
        <button
          onClick={() => {
            props.FetchApi("https://dog.ceo/api/breeds/image/random");
          }}
        >
          New Dog
        </button>
      </header>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { FetchApi })(App);
