import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import "./jobpostingform.css";
import jobicon from "../assets/jobicon.png";
import axios from "axios";
import { AuthContext } from "../context/contextAuth";
import LoginForm from "./login";



const PostJob = () => {
  const [jobTitle, setTitle] = useState("");
  const [companyName, setCompany] = useState("");
  const [jobDescription , setDescription] = useState("");
  const [jobLocation, setLocation] = useState("");
  const [jobEntryLevel, setLevel] = useState("");
const navigate = useNavigate();
const {currentUser} = useContext(AuthContext)


  const handlePostJob = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9000/jobs", {
        jobTitle,
        companyName,
        jobLocation,
        jobEntryLevel,
        jobDescription 
    }, {withCredentials: true});
    alert("Job successfully posted!");
    navigate("/jobsearch");
    if (jobTitle === "" || companyName === "" || jobDescription === "" || jobLocation === "" || jobEntryLevel === "") {
      alert("Please fill in all fields");
      return;
    }


    // handle the form submission here
    console.log("Title:", jobTitle);
    console.log("Company:", companyName);
    console.log("Description:", jobDescription );
    console.log("Location:", jobLocation);
    console.log("Level:", jobEntryLevel);
  };

  return (
    currentUser ?
    <>
      <div className="header">

        <img src={jobicon} alt="" />
        <h1>PATAJOB</h1>
        <p>Post your job here</p>
        <p>Get qualified employees in a minute</p>
        
      </div>
      

        
      <form onSubmit={handlePostJob}>
        <div className="form-container">
          <input
            className="input-field"
            type="text"
            placeholder="Job title"
            value={jobTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Company"
            value={companyName}
            onChange={(e) => setCompany(e.target.value)}
          />
          <textarea
            className="input-field"
            placeholder="Job description"
            value={jobDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Location"
            value={jobLocation}
            onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className="input-field"
            type="text"
            placeholder="entry level"
            value={jobEntryLevel}
            onChange={(e) => setLevel(e.target.value)}
          />

<button className={`level-button`} type="submit">
          POST JOB
        </button>
        </div>
       
      </form>

      <button
              className="level-button1" 
              onClick={() => navigate("/jobsearch")}
            >
              Back to home
            </button>
        

    
    </>
    :
    <div>
    <span>
    <LoginForm/>
    </span></div>
  );
};

export default PostJob;
