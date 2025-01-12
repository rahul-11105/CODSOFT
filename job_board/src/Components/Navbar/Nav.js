import React from 'react'
import "./nav.css";

const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
      <img className='logoImg' src="/source/logo.png" alt="logo" />
      </div>

      <div className='navigation'>
          <ul className='links'>
          <li>Home</li>
          <li>Brows Jobs</li>
          <li>Pages</li>
          <li>blogs</li>
          <li>Contact</li>
          </ul>
      </div>
      <div className='jobPost'>
      <a href="#" className='loginBtn'>login</a>
      <a href="#" className='postJobBtn'>Post A Job</a>
      </div>
    </nav>
    </>
  )
}

export default Nav;
