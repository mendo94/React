import { connect } from "react-redux";
import React, { useState } from "react";

function AddSubtractCounter(props) {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <div>
      <div>AddSubtractCounter</div>
      <input type="text" onChange={handleChange} name="addSubTextBox" />
      <button onClick={() => props.onAdd(number)}>Add</button>
      <button onClick={() => props.onSub(number)}>Subtract</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch({ type: "ADD", payload: value }),
    onSub: (value) => dispatch({ type: "SUB", payload: value }),
  };
};

export default connect(null, mapDispatchToProps)(AddSubtractCounter);
