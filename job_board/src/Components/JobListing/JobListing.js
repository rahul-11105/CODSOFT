import React from 'react';
import "./joblisting.css";

const JobListing = () => {
  return (
    <div className="joblistingContainer">
      <div className="J-container">
        <div className="jobHeading">
          <h3>Job Listing:</h3>
          <div className="jobHeadingBtn">
            <a className="jobHeadingBtn-a" href="#">
              Browse More Jobs
            </a>
          </div>
        </div>

        <div className="job">
          <div className="jobleft">
            <div className="jobLogo">
                <img src="/source/software engineer.png" alt="" />
            </div>
            <div className="jobleftInfo">
              <div id="jname">Software Engineer</div>
              <p><i class="fa-solid fa-location-dot location-logo"></i>California, USA</p>
            </div>
          </div>
          <div className="jobright">
            <a className='heart' href="#"><i class="fa-regular fa-heart"></i></a>
            <a className='applyBtn' href="#">Apply Now</a>
          </div>
        </div>


        <div className="job">
          <div className="jobleft">
            <div className="jobLogo">
                <img src="/source/software engineer.png" alt="" />
            </div>
            <div className="jobleftInfo">
              <div id="jname">Software Engineer</div>
              <p><i class="fa-solid fa-location-dot location-logo"></i>California, USA</p>
            </div>
          </div>
          <div className="jobright">
            <a className='heart' href="#"><i class="fa-regular fa-heart"></i></a>
            <a className='applyBtn' href="#">Apply Now</a>
          </div>
        </div>

        <div className="job">
          <div className="jobleft">
            <div className="jobLogo">
                <img src="/source/software engineer.png" alt="" />
            </div>
            <div className="jobleftInfo">
              <div id="jname">Software Engineer</div>
              <p><i class="fa-solid fa-location-dot location-logo"></i>California, USA</p>
            </div>
          </div>
          <div className="jobright">
            <a className='heart' href="#"><i class="fa-regular fa-heart"></i></a>
            <a className='applyBtn' href="#">Apply Now</a>
          </div>
        </div>


        <div className="job">
          <div className="jobleft">
            <div className="jobLogo">
                <img src="/source/software engineer.png" alt="" />
            </div>
            <div className="jobleftInfo">
              <div id="jname">Software Engineer</div>
              <p><i class="fa-solid fa-location-dot location-logo"></i>California, USA</p>
            </div>
          </div>
          <div className="jobright">
            <a className='heart' href="#"><i class="fa-regular fa-heart"></i></a>
            <a className='applyBtn' href="#">Apply Now</a>
          </div>
        </div>


        <div className="job">
          <div className="jobleft">
            <div className="jobLogo">
                <img src="/source/software engineer.png" alt="" />
            </div>
            <div className="jobleftInfo">
              <div id="jname">Software Engineer</div>
              <p><i class="fa-solid fa-location-dot location-logo"></i>California, USA</p>
            </div>
          </div>
          <div className="jobright">
            <a className='heart' href="#"><i class="fa-regular fa-heart"></i></a>
            <a className='applyBtn' href="#">Apply Now</a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default JobListing;
