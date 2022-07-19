import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";

function IncrementDecrementCounter(props) {
  return (
    <div>
      <h1>IncrementCounter</h1>
      <button onClick={() => props.onIncrement()}>Increment</button>
      <button onClick={() => props.onDecrement()}>Decrement</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrement: () =>
      dispatch({
        type: "DECREMENT",
      }),
  };
};

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter);
