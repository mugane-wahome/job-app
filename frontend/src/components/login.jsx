import React, { useContext, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';
import jobicon from '../assets/jobicon.png';
import axios from "axios"
import { AuthContext } from '../context/contextAuth';


export const loginAction = async ({request, params}) => {
    const loginForm = await request.formData();
    const loginData = Object.fromEntries(loginForm);
    console.log(loginData)
    return redirect('/jobsearch');
}

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, email, password})
      // const response = await axios.post("http://localhost:9000/login", { username, email, password}, { withCredentials: true})
      return navigate("/jobsearch")
    } catch (error) {
      console.error(error)
    }
  };

  return (
    
    <div className="login-form-container">
        <img src={jobicon} alt="" />
      <h1 className="login-title">PATAJOB</h1>
      <h3 className="login-subtitle">Login</h3>
    
      <div className="login-description">
        Nice to see you come back!
        </div>
      <Form method='post' onSubmit={handleSubmit}>
        <div className="login-form-field">
          <label htmlFor="username" className="login-form-label">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-form-input"
          />
        </div>
        <div className="login-form-field">
          <label htmlFor="email" className="login-form-label">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-form-input"
          />
       </div>
        <div className="login-form-field">
          <label htmlFor="password" className="login-form-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input"
          />
        </div>
        <div className="login-form-field">
          <button type="submit" className="login-form-button">Login</button>
          </div>
      </Form>
      
      <div className="login-form-link">
        <p>Login as</p>
          <button type="submit" className="login-form-button"><Link to="/jobsearch">recruitee</Link></button>
          </div>
        <div className="login-form-link">
  
        <button className="login-form-button"><Link to="/jobsearch" >recruiter</Link></button>
          
        </div>
        <div className="login-form-link">
        Don't have an account?<Link to="/signup" className="login-form-link">Sign up</Link>
      </div>

    </div>
  );
};

export default LoginForm;