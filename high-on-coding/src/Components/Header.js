import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="text-color">HighOnCoding</h1>

        <ul className="text-color menu">
          <li>Home</li>
          <li>Categories</li>
        </ul>
      </div>
    );
  }
}
