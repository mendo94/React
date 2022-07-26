import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import BookFilter from "./BookFilter";
import * as actionCreators from "../store/creators/actionCreators";
import { connect } from "react-redux";
import Logout from "./Logout";
import "./BookCart.css";

function BookList(props) {
  const books = props.books;
  const userId = props.userId;

  useEffect(() => {
    getAllBooks();
  }, []);
  // const getAllBooks =  () => {
  //   const token = localStorage.getItem("jsonwebtoken");
  //   const username = localStorage.getItem("username");
  //   if (token && username) {
  //     fetch(`http://localhost:8080/${username}`), {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   }).then(response => response.json())
  //   .then(result => {
  //     console.log(result);
  //   })

  //   // const books = await response.json();
  //   // console.log(books);
  //   // props.onBooksLoaded(books);
  // }}
  const getAllBooks = () => {
    const token = localStorage.getItem("jsonwebtoken");
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if (token && userId) {
      fetch(`http://localhost:8080/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            props.onBooksLoaded(result);
          }
        });

      props.onBooksLoaded(books);
    }
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
      {/* <BookFilter /> */}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>{bookItems}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    username: state.userReducer.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch(actionCreators.loadBooks(books)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
