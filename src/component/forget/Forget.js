import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Forget = () => {
    const navigate = useNavigate();

    const [forgetEmail, setForgetEmail] = useState('');
    const [forgetPassword, setForgetPassword] = useState('');

    const handleForgetEmail = (e) => {
        setForgetEmail(e.target.value);
    };

    const hanldeForgetPassword = (e) => {
        setForgetPassword(e.target.value);
    };

    const handleChangePasswordBtn = () => {
        const forgetData = {
            sendForgetEmail: forgetEmail,
            sendForgetPassword: forgetPassword
        }
        axios.post('http://localhost:3000/forget', forgetData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message))
    }

  return (
    <div className="signin">
      <h1>Forget Password</h1>
      <div className="signin-wrapper">
        <h4 className="register-header">Email</h4>
        <input
          type="email"
          className="register-input"
          placeholder="sotu@gmail.com"
          onChange={handleForgetEmail}
        />
        <h4 className="register-header">Password</h4>
        <input
          type="password"
          className="register-input"
          placeholder="......"
          onChange={hanldeForgetPassword}
        />
        <button className="register-btn" onClick={handleChangePasswordBtn}>
          Change Password
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
          <h5 className="link">Forget Password</h5>
        </div>
      </div>
    </div>
  );
};

export default Forget;
