import React, { useState } from "react";
import { Form } from "react-router-dom";
import "./jobsearch.css";
import { Link, useNavigate } from "react-router-dom";
import jobicon from "../assets/jobicon.png";

const JobSearchForm = () => {
  const [jobKeyword, setJobKeyword] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [cv, setCv] = useState("");
  const [message, setMessage] = useState("");
  const [searchjobs, setSearchjobs] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobKeyword && !company && !location && !cv) {
      setMessage("fill all the fields");
      return;
    }

    const hasValue = jobKeyword || company || location || cv;

    if (hasValue) {
      setMessage("goodluck with your job search");
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  const handlePostJob = () => {
    return navigate("/jobpostingform");
  };

  return (
    <div className="job-search-container">
      <nav className="navigation_bar">
        <button className="level-button">
          <Link to="/login">log out</Link>
        </button>

        <button className="level-button" onClick={handlePostJob}>
          post job
        </button>
      </nav>

      {/* <button
            className={`level-button ${level === "POST JOB" && "active"}`}
            onClick={() => setLevel("")}
          >
            POST JOB
          </button> */}

      {/* <img src={jobicon} alt="" /> */}
      <img src={jobicon} alt="job icon" />

      <h1>РАТАЈОВ</h1>

      <h3>search, find and apply</h3>
      <h4>This is your place, over 1M people got job via this platform</h4>
      <Form onSubmit={handleSubmit} className="job-search-form">
        <p>
          <label htmlFor="jobKeyword">What</label>
          <input
            type="text"
            id="jobKeyword"
            placeholder="Job keyword or company"
            value={jobKeyword}
            onChange={(e) => setJobKeyword(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="language">full/ part time</label>
          <select name="job level" id="language">
            {/* <option value="senior" selected> senior </option> */}
            <option value="intermidiate">full time </option>
            <option value="junior">part time</option>
          </select>
        </p>
        <p>
          <label htmlFor="location">Where</label>
          <input
            type="text"
            id="location"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="language">job level</label>
          <select name="job level" id="language">
            <option value="senior" selected>
              senior
            </option>
            <option value="intermidiate">junior </option>
            <option value="junior">junior</option>
          </select>
        </p>
        <p>
          <label htmlFor="cv">Upload your resume</label>
          <input
            type="file"
            id="resume"
            accept=".pdf,.doc,.docx"
            value={cv}
            onChange={(e) => setCv(e.target.files[0])}
          />
        </p>
        <p className="submit">
          {" "}

          <button className="submit" type="submit">
            search
          </button>

          <button className="submit" type="submit" onClick={handleSearch}>Search</button>
        </p>
      </Form>

      <p className="message">{message}</p>
      <span>Get a job, work hard be paying your bills😂😂😂</span>
    </div>
  );
};

export default JobSearchForm;
