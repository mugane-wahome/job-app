import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/contextAuth";
import { Form } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import jobicon from "../assets/jobicon.png";
import axios from "axios";
import "./jobsearch.css";
// import { useContext} from "react";

const JobSearchForm = () => {
  const [jobKeyword, setJobKeyword] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("all");
  const [remote, setRemote] = useState(false);
  const [message, setMessage] = useState("");
  const [searchJobs, setSearchJobs] = useState([]);
  const [filterJobs, setFilterJobs] = useState([]);
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);

  // const handleFileChange = async (event) => {
  //   const resume = event.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", resume);
  //   const response = await fetch("http://localhost:8000/resume", {
  //     body: formData,
      
  //     method: "post",
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   if (data.status === "success") {
  //     onFileSelect(data.filePath)
  //   }







  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:9000/allJobs", {
        withCredentials: true,
      });
      console.log(res.data);
      setSearchJobs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchJobs();
    console.log(searchJobs);

    const filteredJobs = searchJobs.filter((job) => {
      const titleMatch = job.jobTitle
        .toLowerCase()
        .includes(jobKeyword.toLowerCase());
      const companyMatch = job.companyName
        .toLowerCase()
        .includes(company.toLowerCase());
      const locationMatch = job.jobLocation
        .toLowerCase()
        .includes(location.toLowerCase());
      const levelMatch = job.entryLevel === level || level === "all";
      return titleMatch && companyMatch && locationMatch && levelMatch;
    });
    console.log(filteredJobs);
    setFilterJobs(filteredJobs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobKeyword && !company && !location && !level && !remote) {
      setMessage("Fill all the fields");
      return;
    }

    setMessage("Good luck with your job search!");
    handleSearch();
  };

  const handlePostJob = () => {
    return navigate("/jobpostingform");
  };

  const handleLogout = async () => {
    try {
      await logout();
      return navigate("/");
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="job-search-container">
      <nav className="navigation_bar">
        {/* <p>{currentUser}</p> */}

        <button className="level-button1" onClick={() => navigate("/homepage")}>
          Back to Job Search
        </button>

        {currentUser && (
          <>
            <button className="level-button1" onClick={handlePostJob}>
              Post new job
            </button>

            <button className="level-button1" onClick={handleLogout}>
              log out
            </button>
          </>
        )}
      </nav>
      <img src={jobicon} alt="Job icon" />
      <h1>РАТАЈОВ</h1>
      <h3>Search, find and apply</h3>
      <h4>This is your place, over 1M people got job via this platform</h4>
      <Form onSubmit={handleSubmit} className="job-search-form">
        <p>
          <label htmlFor="jobKeyword">Job title</label>
          <input
            type="text"
            id="jobKeyword"
            placeholder="Job keyword or company"
            value={jobKeyword}
            onChange={(e) => setJobKeyword(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="jobKeyword">company</label>
          <input
            type="text"
            id="jobKeyword"
            placeholder="company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="jobKeyword">location</label>
          <input
            type="text"
            id="jobKeyword"
            placeholder="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>


        {/* <div className="file"> 
        <p>upload your resume</p>
      <input
        type="file"

        name="category_img"
        required={required}
        onChange={handleFileChange}
      />
    </div> */}











        {/* Other form fields go here */}
        <p className="submit">
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </p>
      </Form>
      {filterJobs.length > 0 && <p className="message">{message}</p>}
      <div className="job-list">
        {filterJobs.map((job) => (
          <div
            key={job.id}
            className="job"
            onClick={() => navigate(`/jobdetails/${job.id}`)}
          >
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <p>{job.jobLocation}</p>
            <p>{job.entryLevel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearchForm;
