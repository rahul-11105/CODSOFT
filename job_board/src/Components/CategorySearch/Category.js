import React, { useState, useContext } from "react";
import "./category.css";
import UserContext from "../Context/UserContext";

const Category = () => {
  const [keywordValue, setKeywordValue] = useState("");
  const { jobData } = useContext(UserContext);


  const [filteredData, setFilteredData] = useState([]);
  const [availableJobsWithKey, setAvailableJobsWithKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const results = jobData.filter((job) =>
      keywordValue ? job.title.toLowerCase().includes(keywordValue.toLowerCase()) : false
    );

    setFilteredData(results);
    setAvailableJobsWithKey(keywordValue);

    setKeywordValue("");
  }

  function handleOnChange(e) {
    setKeywordValue(e.target.value);
  }

  return (
    <>
      <div className="category">
        <div className="container">
          <form className="search" onSubmit={handleSubmit}>
            <div className="search">
              <input
                name="keyword"
                className="containerInp"
                type="text"
                placeholder="Search keyword"
                value={keywordValue}
                onChange={handleOnChange}
              />
              <button type="submit" className="findJobsBtn">Find Jobs</button>
            </div>
          </form> 

          <div className="populerSearch">
            <span className="populerSearchHeading">Popular Search :</span>
            <p className="populerSearchopt" >Web Development</p>
            <p className="populerSearchopt" >Marketing</p>
            <p className="populerSearchopt" >Development</p>
            <p className="populerSearchopt">Teaching</p>
          </div>

        {filteredData.length > 0 ? (
          <div className="filteredJobs">
            {filteredData.length} jobs available for keyword "{availableJobsWithKey || "All"}"
          </div>
        ) : (
          <div className="filteredJobs">No jobs found for keyword "{availableJobsWithKey}"</div>
        )}
        </div>
      </div>
    </>
  );
};

export default Category;
