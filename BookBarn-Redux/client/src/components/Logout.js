import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actionCreators from "../store/creators/actionCreators";

import React from "react";

function Logout(props) {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     handleLogout();
  //   }, []);

  const handleLogout = () => {
    localStorage.removeItem("jsonwebtoken");
    localStorage.removeItem("username");

    props.onLogOut();

    navigate("/login");
  };

  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(actionCreators.loadAuth(null)),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
