import React, { useState, useEffect, useContext } from "react";
import "./browsjobs.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import data from "./Json_Data";
import UserContext from "../Context/UserContext"

const BrowsJobs = () => {
  const [count, setCount] = useState(0);
  const {jobData}= useContext(UserContext);
  const [jobs, setJobs] = useState(jobData);
  const [formData, setFormData] = useState({
    job_title: '',
    location: '',
    category: '',
    gender: '',
    qualification: '',
  });



  useEffect(()=>{

  },[]);
  const handleSubmit = (e) => {
      e.preventDefault();
      setCount(0);
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleOnclick() {
    setFormData(
        {
            job_title: '',
            location: '',
            category: '',
            gender: '',
            qualification: '',
        }
    )
  }

  // Filter jobs based on the formData (location, category)
  const filteredJobs = jobs.filter((job) => {
    return (
      (formData.job_title ? job.role.toLowerCase().includes(formData.job_title.toLowerCase()) : true) &&
      (formData.location ? (job.location?job.location.toLowerCase().includes(formData.location.toLowerCase()):false): true) &&
      (formData.category ?(job.category?job.category.toLowerCase().includes(formData.category.toLowerCase()):false): true)
    );
  });




  const jobsToDisplay = filteredJobs.slice(count, count + 4);

  return (
    <>
      <section className="j-container">
        <Nav />
        <div className="contact">
          <h3>{filteredJobs.length >= 500 ? "500+" : filteredJobs.length} Jobs Available</h3>
        </div>
        <div className="jobs-container">
          <div className="J-filter">
            <h3>Filter</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Job Title"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
              <button className="J-Find-Btn" type="submit">Find</button>
            </form>
            <button onClick={handleOnclick} className="J-Find-Btn">Reset</button>
          </div>

          <div className="jobsAvailable">
            <div className="j-Heading">
              <h3>Job Listing:</h3>
            </div>

            {jobsToDisplay.map((job, index) => (
              <div className="job" key={index}>
                <div className="jobleft">
                  <div className="jobLogo">
                    <img src="source/job-logo.jpg" alt="job-logo" />
                  </div>
                  <div className="jobleftInfo">
                    <div id="jname">
                      <a href={job.url || "#"}>{job.role || "J-Role-Not-Mentioned"}</a>
                    </div>
                    <p><i className="fa-solid fa-location-dot location-logo"></i>{job.location || "-----------"}</p>
                  </div>
                </div>
                <div className="jobright">
                  <a className="heart" href="#"><i className="fa-regular fa-heart"></i></a>
                  <a className="applyBtn" href={job.url || "#"}>Apply Now</a>
                </div>
              </div>
            ))}

            <div className="j-btns">
              <button className="j-prevbtn" onClick={() => setCount(count - 4)} disabled={count <= 0}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="j-nextbtn" onClick={() => setCount(count + 4)} disabled={count + 4 >= filteredJobs.length}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BrowsJobs;


