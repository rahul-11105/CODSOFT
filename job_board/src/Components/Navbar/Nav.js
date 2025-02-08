import React, { useContext, useEffect } from 'react'
import {useState} from "react";
import "./nav.css";
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import { useLocation } from 'react-router-dom';

const Nav = () => {
const [show,setShow] = useState(false);
const{checkAuth,Auth,setAuth} = useContext(UserContext);
const location = useLocation();

useEffect(()=>{
  checkAuth();
},[]);


const handleLogOut = async()=>{
  
  try {
    const res = await fetch('http://localhost:8080/logout',{
      method:'get',
      credentials:'include',
    });
    const data =await res.json();
    console.log(data);
    if(data.message === 'ok') {
      alert('logged out successfully');
      setAuth(false);
    }
    else {
      alert('an error occured while loged out');
    }
  } catch (error) {
    console.log(error);
  }
  
}

  return (
    <>
    <nav className='navbar'>
      <div className='logo'>
      <img className='logoImg' src="/source/logo.png" alt="logo" />
      </div>

      <div className='navigation'>
          <ul className='links'>
          <li><Link className='li' to="/">Home</Link></li>
          <li><Link className='li' to={Auth?'/jobs':'/signup'}>Brows Jobs</Link></li>
          <li><Link className='li' to="/contact">Contact</Link></li>
          </ul>
      </div>
      <img src="/source/mobile_menu.png" className="mobile_menu"  onClick={()=>{setShow(!show)}}/>
      <div className="mobileNavigator" style={{ display: show ? "flex" : "none" }}>
 
            <ul className='links'>
                  <li><Link className='li' to="/" onClick={()=>{setShow(!show)}}>Home</Link></li>
                  <li><Link className='li' to={Auth?'/jobs':'/signup'} onClick={()=>{setShow(!show)}}>Brows Jobs</Link></li>
                  <li><Link className='li' to="/contact" onClick={()=>{setShow(!show)}}>Contact</Link></li>
                  <li>{
                        Auth?(<button onClick={handleLogOut} className='logOutBtn'>LogOut</button>):(<Link className='loginBtn' to="/login">Login</Link>)
                      }
                  </li>

            </ul>
      </div>
      <div className='jobPost'>
        {
          Auth?(<button onClick={handleLogOut} className='logOutBtn'><img className='login_img' src='source/log-out_10065804.png'/>LogOut</button>):(location.pathname!='/login'?<Link className='loginBtn' to="/login"><img className='login_img' src='source/log_10068669.png'/>Login</Link>:<Link className='loginBtn' to="/"><img className='login_img' src='source/left-arrow (1).png'/>Back</Link>)
        }
          
      </div>
    </nav>

    </>
  )
}

export default Nav;
