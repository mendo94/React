import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/creators/actionCreators";
import { connect } from "react-redux";

function BookFilter(props) {
  const [genre, setGenre] = useState([]);

  const handleChange = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = () => {
    const genreItems = props.books.map((book) => {
      return (
        <div>
          <div>{book.genre}</div>
        </div>
      );
    });
    console.log(genreItems);
    // const filteredGenres = genreItems.filter;
  };

  return (
    <div>
      <br></br>
      <header>
        {/* <div>{props.books.genre}</div> */}
        <h2>Filter By Genre</h2>
        <input name="filter" type="text" onChange={handleChange} />

        <button onClick={handleSubmit}>Sort Genres</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
    userId: state.userReducer.userId,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onBooksLoaded: (books) => dispatch(actionCreators.loadBooks(books)),
//   };
// };
export default connect(mapStateToProps)(BookFilter);
