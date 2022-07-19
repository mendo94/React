import * as actionTypes from "./actions/actionTypes";

const initialState = {
  books: [],
  userId: "",
  cart: [],
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ADD_TASKS:
    //   return {
    //     ...state,
    //     tasks: state.tasks.concat(action.payload),
    //   };

    case actionTypes.LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    case actionTypes.LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
