import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import jobicon from "../assets/jobicon.png";
import job2 from "../assets/job2.png";
import job1 from "../assets/job1.png";

const Homepage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="homepage-container">
        <div className='navv'>
        <nav className="navbar">
  <Link to="/login" className="nav-link1">Login</Link>
  <Link to="/signup" className="nav-link2">Signup</Link>
</nav>
        </div>
 


      <img src={jobicon} alt="Logo" />
      <header className="header">
   
        <h1>PATAJOB</h1>
      </header>
    

<div>
    <h1>Find your dream job</h1>
    <h2>Search, find and apply</h2>
    <h3>This is your place, over 1M people got job via this platform</h3>
</div>


<div className="dropdown">
        <button className={`dropbtn ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
          Read More
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <p>This is your go-to platform for finding the perfect job. Search, apply, and get hired!</p>
            {/* More content here */}
          </div>
        )}
      </div>





<div className="images-container">
  <img src={job1} alt="image 1" />
  <img src={job2} alt="image 2" />
  <img src={job1} alt="image 3" />
  <img src={job2} alt="image 4" />
</div>





     
    </div>
  );
};

export default Homepage;
