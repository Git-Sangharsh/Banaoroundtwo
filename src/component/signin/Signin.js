import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSignEmail = (e) => {
    setSignInEmail(e.target.value);
  };

  const handleSignPassword = (e) => {
    setSignInPassword(e.target.value);
  };

  const handleSignIn = () => {
    const SignInData = {
      sendSignInEmail: signInEmail,
      sendSignInPassword: signInPassword,
    };
    axios
      .post("http://localhost:5000/signin", SignInData)
      .then((res) => {
        if (res.data.signin === "success") {
          navigate("/");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error found on Signin component");
      });
  };

  return (
    <div className="signin">
      <h1>SignIN</h1>
      <div className="signin-wrapper">
        <h4 className="register-header">Email</h4>
        <input
          type="email"
          className="register-input"
          placeholder="sotu@gmail.com"
          onChange={handleSignEmail}
        />
        <h4 className="register-header">Password</h4>
        <input
          type="password"
          className="register-input"
          placeholder="......"
          onChange={handleSignPassword}
        />
        <button className="register-btn" onClick={handleSignIn}>
          SIGNIN
        </button>
        <div className="link-div">
          <h5
            className="link"
            onClick={() => {
              navigate("/");
            }}
          >
            Register
          </h5>
          <h5 className="link" onClick={() => {
            navigate('/forget')
          }}>Forget Password</h5>
        </div>
      </div>
    </div>
  );
};

export default Signin;
