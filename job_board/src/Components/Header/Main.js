import React from 'react';
import "./main.css";
import Nav from '../Navbar/Nav';

const Main = () => {
  return (
    <>
    <div className='mainArea'>
      <Nav/>
      <div className='headerArea'>
        <div className='headerTxt'>
            <h5 id='jobslisted'>4536+ Jobs listed</h5>
            <h3>Find your Dream Job</h3>
            <p>We provide online instant cash loans with quick approval that suit your term length</p>
            <a href='#' className='upload'>Upload Your Resume</a>
        </div>
        <div  className='headerImg'><img src="/source/illustration.png" alt="img"/></div>
      </div>
    </div>
      
    </>
  )
}

export default Main;
