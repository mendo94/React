import React, { Component } from "react";
import "./Books.css";

class Books extends Component {
  render() {
    const bookItems = this.props.books.map((book, index) => {
      return (
        <li key={index}>
          <h3>{book.title}</h3>
          <img
            src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`}
            alt=""
          />
          <p>{book.author}</p>
          <span>{book.year}</span>
        </li>
      );
    });
    return <ul className="bookList">{bookItems}</ul>;
  }
}

export default Books;
