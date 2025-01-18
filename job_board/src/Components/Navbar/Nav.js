import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
      <img className='logoImg' src="/source/logo.png" alt="logo" />
      </div>

      <div className='navigation'>
          <ul className='links'>
          <li><Link className='li' to="/">Home</Link></li>
          <li><Link className='li' to="/jobs">Brows Jobs</Link></li>
          <li><Link className='li' to="/contact">Contact</Link></li>
          </ul>
      </div>
      <div className='jobPost'>
      <Link className='loginBtn' to="/login">Login</Link>
      <a href="#" className='postJobBtn'>Post A Job</a>
      </div>
    </nav>
    </>
  )
}

export default Nav;
