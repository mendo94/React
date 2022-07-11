import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sections from "./Components/Sections";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Sections />
      </div>
    );
  }
}
