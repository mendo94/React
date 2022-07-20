import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: "",
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
