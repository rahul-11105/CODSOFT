import React, { useEffect,useContext} from 'react';
import "./joblisting.css";
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
const JobListing = () => {

  const {jobData} = useContext(UserContext);

  const jobs_4 = jobData;
const {checkAuth,Auth} = useContext(UserContext);
useEffect(() => {
  checkAuth();
}, []);

  return ( 
    <div className="joblistingContainer">
      <div className="J-container">
        <div className="jobHeading">
          <h3>Job Listing:</h3>
          <div className="jobHeadingBtn">
            <Link className="jobHeadingBtn-a" to={Auth?'/jobs':'/signup'}>Brows more Jobs</Link>
          </div>
        </div>

        {
          jobs_4.slice(0,5).map((job)=>{
            return(
              <div className="job">
                            <div className="jobleft">
                                <div className="jobLogo">
                                    <img src= {job.owner!=null?job.owner.photo:"source/job-logo.jpg"} alt='j-logo'/>
                                </div>
                                <div className="jobleftInfo">
                                <div id="jname">
                                    <a href={(job?.url==null?"#":job.url)}>
                                    {(job.title==null?"J-Role-Not-Mentioned":job.title)}
                                    </a>
                                </div>
                                <p><i class="fa-solid fa-location-dot location-logo"></i>{(job.locationAddress==null?"-----------":job.locationAddress)}</p>
                                </div>
                            </div>
                            <div className="jobright">
                                <p className='heart'><i class="fa-regular fa-heart"></i></p>
                                <a className='applyBtn' href={(job?.url==null?"#":job.url)}>Apply Now</a>
                            </div>
              </div>
            );
          })
        }



      </div>
    </div>
  );
};

export default JobListing;
