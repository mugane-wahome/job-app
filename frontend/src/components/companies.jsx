import React from "react";
import { useNavigate } from "react-router-dom";
import "./companies.css";
import huawei from "../assets/huawei.jpg";


// import huawei from "../assets/huawei.png";
// Assuming the images are located in the 'public/images' folder in your project
const companies = [
  {
    id: 1,
    name: "Acme Inc.",
    logo: "acme_logo.png",
    description:
      "Acme Inc. is a leading provider of innovative products and services.",
    website: "https://www.acmeinc.com",
    title: "Head of Innovation",
    location: "New York, NY",
    products: ["Widgets", "Gadgets", "Thingamajigs"],
    founded: 1955,
  },
  {
    id: 1,
    name: "Acme Inc.",
    logo: "acme_logo.png",
    description:
      "Acme Inc. is a leading provider of innovative products and services.",
    website: "https://www.acmeinc.com",
    title: "Head of Innovation",
    location: "New York, NY",
    products: ["Widgets", "Gadgets", "Thingamajigs"],
    founded: 1955,
  },
  {
    id: 1,
    name: "Acme Inc.",
    logo: "acme_logo.png",
    description:
      "Acme Inc. is a leading provider of innovative products and services.",
    website: "https://www.acmeinc.com",
    title: "Head of Innovation",
    location: "New York, NY",
    products: ["Widgets", "Gadgets", "Thingamajigs"],
    founded: 1955,
  },
  {
    id: 1,
    name: "Acme Inc.",
    logo: "acme_logo.png",
    description:
      "Acme Inc. is a leading provider of innovative products and services.",
    website: "https://www.acmeinc.com",
    title: "Head of Innovation",
    location: "New York, NY",
    products: ["Widgets", "Gadgets", "Thingamajigs"],
    founded: 1955,
  },
  {
    id: 1,
    name: "Acme Inc.",
    logo: "acme_logo.png",
    description:
      "Acme Inc. is a leading provider of innovative products and services.",
    website: "https://www.acmeinc.com",
    title: "Head of Innovation",
    location: "New York, NY",
    products: ["Widgets", "Gadgets", "Thingamajigs"],
    founded: 1955,
  },
  {
    id: 2,
    name: "Brilliant Labs",
    logo: "brilliant_labs_logo.png",
    description:
      "Brilliant Labs is a company dedicated to pushing the boundaries of technology.",
    website: "https://www.brilliantlabs.com",
    title: "Software Engineer",
    location: "San Francisco, CA",
    products: ["AI Software", "Machine Learning Tools"],
    founded: 2010,
  },
];

const Company = ({ company }) => {
  const navigate = useNavigate();

  return (
    <li className="company" key={company.id}>
    <img src={huawei} alt="" />
      <div className="company-info">
        <h3>{company.name}</h3>
        <p>
          <b>Title:</b> {company.title}
        </p>
        <p>
          <b>Location:</b> {company.location}
        </p>
        <p>
          <b>Founded:</b> {company.founded}
        </p>
        <p>
          <b>Products:</b> {company.products.join(", ")}
        </p>
        <button
          onClick={() => alert(`YOU HAVE JOINED ${company.name} talent pool`)}
        >
          Join Talent Pool
        </button>
      </div>
    </li>
  );
};

const Companies = () => {
  const navigate = useNavigate();
  return (
    <div className="companies">
      <h2>Featured Companies</h2>
      <ul className="company-list">
        {companies.map((company) => (
          <Company key={company.id} company={company} />
        ))}
      </ul>

      <div className="back">
        <button
          className="level-button1"
          onClick={() => navigate("/jobsearch")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Companies;
