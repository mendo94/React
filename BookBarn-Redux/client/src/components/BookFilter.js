import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/creators/actionCreators";
import { connect } from "react-redux";

function BookFilter() {
  return (
    <div>
      <br></br>
      <header>
        <h2>Filter By Genre</h2>
        <input type="text" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch(actionCreators.loadBooks(books)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookFilter);
