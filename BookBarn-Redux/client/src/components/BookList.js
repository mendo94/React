import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BookFilter from "./BookFilter";
import * as actionCreators from "../store/creators/actionCreators";
import { connect } from "react-redux";
import "./BookCart.css";

function BookList(props) {
  const books = props.books;
  const userId = props.userId;

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const response = await fetch(`http://localhost:8080/${userId}`);

    const books = await response.json();
    console.log(books);
    props.onBooksLoaded(books);
  };

  const handleBookDelete = (bookId) => {
    fetch(`http://localhost:8080/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          getAllBooks();
        }
      });
  };

  const bookItems = books.map((book) => {
    return (
      <div
        className="card text-dark"
        style={{
          maxWidth: "16em",
          minWidth: "16em",
          padding: "2em",
          margin: "2em",
          backgroundColor: "none",
        }}
        key={book.id}
      >
        <li>
          <b>{book.title}</b>
        </li>
        <li>
          <b>Genre:</b> {book.genre}
        </li>
        <li>
          <b>Author:</b> {book.publisher}
        </li>
        <li>{book.year}</li>
        <li>
          <img className="img-sm" src={book.imageURL} alt={book.title} />
        </li>
        <button
          className="btn btn-dark"
          onClick={() => handleBookDelete(book.id)}
          style={{
            margin: "2em",
          }}
        >
          Delete Book
        </button>
      </div>
    );
  });
  return (
    <div>
      <BookFilter />
      <ul style={{ display: "flex", flexWrap: "wrap" }}>{bookItems}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    userId: state.userReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch(actionCreators.loadBooks(books)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
