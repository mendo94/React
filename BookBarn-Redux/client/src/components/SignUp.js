import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignUp() {
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveUser = () => {
    fetch("http://localhost:8080/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          navigate("/login");
        }
      });
  };
  console.log(user);

  return (
    <div>
      <h1>Register for an Account</h1>
      <label htmlFor="username">Create username</label>
      <input type="text" name="username" onChange={handleTextChange} />
      <br />
      <label htmlFor="password">Create password</label>
      <input type="password" name="password" onChange={handleTextChange} />
      <br></br>
      <button onClick={handleSaveUser}>Register</button>
    </div>
  );
}

export default SignUp;
