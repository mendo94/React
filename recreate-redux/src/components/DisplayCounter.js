import React from "react";
// import { useState } from "react";
import { connect } from "react-redux";

function DisplayCounter(props) {
  //   const [number, setNumber] = useState(0);

  //   const handleIncrement = () => {
  //     props.onAdd(number);
  //   };

  return (
    <div>
      <h1>Display Counter</h1>
      <h3>{props.ctr}</h3>
      {/* <button onClick={handleIncrement}>Increment</button> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};
export default connect(mapStateToProps)(DisplayCounter);
