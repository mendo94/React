import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function BookCart(props) {
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} /> ({props.bookCart})
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookCart: state.bookReducer.books.length,
  };
};

export default connect(mapStateToProps)(BookCart);
