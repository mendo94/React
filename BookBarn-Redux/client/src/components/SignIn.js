import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import "./SignIn.css";

function SignIn(props) {
  const [user, setUser] = useState({});

  let Navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisteredUser = () => {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log(result.userId);
          const token = result.token;
          localStorage.setItem("jsonwebtoken", token);
          console.log(user.username);
          localStorage.setItem("userId", result.userId);
          const userId = user.username;
          props.onLoadUser(userId);
          props.onLogin(token);
          Navigate(`/`);
        }
      });
  };

  return (
    <div className="container">
      <h1>Sign in to your Account</h1>
      <label htmlFor="username">Enter username</label>
      <input type="text" name="username" onChange={handleTextChange} />
      <label htmlFor="password">Enter password</label>
      <input type="password" name="password" onChange={handleTextChange} />
      <br></br>
      <button
        type="submit"
        onClick={handleRegisteredUser}
        onSubmit={(userId) => props.onAddUser(userId)}
      >
        Login
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadUser: (userId) => dispatch(actionCreators.loadUser(userId)),
    onLogin: (token) => dispatch(actionCreators.loadAuth(token)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
