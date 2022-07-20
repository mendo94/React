import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
