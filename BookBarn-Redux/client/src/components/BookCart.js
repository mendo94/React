import React from "react";
import { connect } from "react-redux";

function BookCart(props) {
  return (
    <div>
      <h1>
        <i className="fa-solid fa-books"></i>
      </h1>
      <h1>{props.bookCart}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookCart: state.books.length,
  };
};

export default connect(mapStateToProps)(BookCart);
