import { connect } from "react-redux";

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
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () =>
      dispatch({
        type: "DECREMENT",
      }),
  };
};

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter);
