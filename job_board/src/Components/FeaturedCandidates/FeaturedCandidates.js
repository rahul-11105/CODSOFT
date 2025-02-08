import React from 'react';
import "./featuredcandidate.css";

const FeaturedCandidates = () => {
  return (
    <>
    <div className='candidates'>
      <div className='candidateHeading'><h3>Featured Candidates</h3></div>
      <div className='candidatesList'>
        <div className='candidate'>
            <img src="/source/candidate.png" alt="img" />
            <h4>Serenity Miller</h4>
            <p>Software Engineer</p>
        </div>
 
        <div className='candidate'>
            <img className="me" src="/source/My photo-modified.png" alt="img" />
            <h4>Rahul Lokhande</h4>
            <p>Full Stack Developer</p>
        </div>

        <div className='candidate'>
            <img src="/source/candidate3.png" alt="img" />
            <h4>Jordern Smith</h4>
            <p>Software Engineer</p>
        </div>

        <div className='candidate'>
            <img src="/source/candidate4.png" alt="img" />
            <h4>Markery Jonden</h4>
            <p>Software Engineer</p>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default FeaturedCandidates;
