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
