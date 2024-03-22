import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./jobdetails.css";
import FileInput from "./appliedjobs";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState();
  const [resume, setResume] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    alert(`You have successfully applied for the ${job.jobTitle} job!`);
    console.log({resume})
    console.log("You have successfully applied for the job!");
  };

  // const handleFileChange = async (event) => {
  //     const resume = event.target.files[0];
  //     const formData = new FormData();
  //     formData.append("file", resume);
  //     const response = await fetch("http://localhost:8000/resume", {
  //       body: formData,

  //       method: "post",
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     if (data.status === "success") {
  //       onFileSelect(data.filePath)
  //     }

  useEffect(() => {
    if (!jobId) return;
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/jobs/${jobId}`, {
          withCredentials: true,
        });
        setJob(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  return (
    <div className="job-details">
      <h1 className="job-details-title">Job Details</h1>
      {job && (
        <div className="job-details-content">
          <p className="job-details-item">Job ID: {job.jobId}</p>
          <h2 className="job-details-item job-details-title">{job.jobTitle}</h2>
          <p className="job-details-item">{job.jobDescription}</p>
          <p className="job-details-item">Entry Level: {job.jobEntryLevel}</p>
          <p className="job-details-item">Location: {job.jobLocation}</p>

          <form action="">
            <h3>upload your resume</h3>
            <FileInput onFileSelect={(filePath) => setResume(filePath)} />
          </form>

          <div className="job-details-buttons">
            <button
              id="applyJobBtn"
              className="apply-button"
              onClick={handleClick}
            >
              Apply Job
            </button>{" "}
            <button
              className="applied-button"
              onClick={() => navigate("/jobsearch")}
            >
              View applied jobs
            </button>
            <button
              className="home-button"
              onClick={() => navigate("/jobsearch")}
            >
              Back to Job Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
