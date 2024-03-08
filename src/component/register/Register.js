import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const naviagate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  }
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  }

  const handleRegisterBtn = () => {
    const registerData = {
      sendRegisterName : userName,
      sendRegisterEmail: userEmail,
      sendRegisterPassword: userPassword
    }
    axios.post('http://localhost:5000/register', registerData)
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log('error found on register component')
    })
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <div className="register-wrapper">
        <h4 className="register-header" >UserName</h4>
        <input type="text" className="register-input" placeholder="sotu" onChange={handleUserName}/>
        <h4 className="register-header">Email</h4>
        <input type="email" className="register-input" placeholder="sotu@gmail.com" onChange={handleUserEmail}/>
        <h4 className="register-header">Password</h4>
        <input type="password" className="register-input" placeholder="......" onChange={handleUserPassword}/>
        <button className="register-btn" onClick={handleRegisterBtn}>REGISTER</button>
        <h5 className="link" onClick={() => {
          naviagate('/signin')
        }}>
          SignIn
        </h5>
      </div>
    </div>
  );
};

export default Register;
