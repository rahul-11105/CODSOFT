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
            <h4>candidate Name</h4>
            <p>info</p>
        </div>

        <div className='candidate'>
            <img src="/source/candidate.png" alt="img" />
            <h4>candidate Name</h4>
            <p>info</p>
        </div>

        <div className='candidate'>
            <img src="/source/candidate.png" alt="img" />
            <h4>candidate Name</h4>
            <p>info</p>
        </div>

        <div className='candidate'>
            <img src="/source/candidate.png" alt="img" />
            <h4>candidate Name</h4>
            <p>info</p>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default FeaturedCandidates;
