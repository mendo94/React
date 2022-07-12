import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="mainMenu">
        <div className="brand">BookBarn </div>
        <nav>
          <ul className="subMenu">
            <li className="menuOptions">Home</li>
            <li className="menuOptions">Browse</li>
            <li className="menuOptions">Join Mailing List</li>
          </ul>
        </nav>
      </header>
    );
  }
}
