const initialState = {
  counter: 0,
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  if (action.type == "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type == "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type == "ADD") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type == "SUB") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  return state;
};

export default reducer;
