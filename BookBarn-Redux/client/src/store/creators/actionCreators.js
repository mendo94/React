import * as actionTypes from "../actions/actionTypes";

export const loadBooks = (books) => {
  return {
    type: actionTypes.LOAD_BOOKS,
    payload: books,
  };
};

export const loadUser = (userId) => {
  return {
    type: actionTypes.LOAD_USER,
    payload: userId,
  };
};

export const loadCart = (cart) => {
  return {
    type: actionTypes.LOAD_CART,
    payload: cart,
  };
};

export const loadAuth = (token) => {
  return {
    type: actionTypes.LOAD_AUTH,
    payload: token,
  };
};

export const getAllBooks = async (userId) => {
  return (dispatch) => {
    fetch(`http://localhost:8080/${userId}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: actionTypes.FETCH_BOOKS, payload: result });
      });
  };
};
export const populateBooks = (books) => {
  return {
    type: actionTypes.FETCH_BOOKS,
    payload: books,
  };
};
