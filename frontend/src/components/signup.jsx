import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import jobicon from '../assets/jobicon.png';

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      alert("Unable to create account, Please input all the details.");
      return;
    }

    await axios.post("http://localhost:9000/signup", { name, email, password });
    navigate("/login");

  };

  return (
    <div className="signup-form-container">
      <img src={jobicon} alt="" />
      <h1>PATAJOB</h1>
      <h3>Create an account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <div id="login">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;
