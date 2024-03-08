import React from "react";
import "./App.css";
import Register from "./component/register/Register";
import Signin from "./component/signin/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forget from "./component/forget/Forget";

const App = () => {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Register /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget" element={<Forget />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
