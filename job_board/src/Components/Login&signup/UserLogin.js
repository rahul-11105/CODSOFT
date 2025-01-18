import React, { useState } from 'react';
import "./userlogin.css";
import Nav from '../Navbar/Nav';
import SignUp from './SignUp';
import { Link,useNavigate } from 'react-router-dom';


function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { username, password };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log('Backend response:', data);

      if (response.ok) {
        navigate("/");
        console.log('Login successful');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
 
  return (
    <section className='login-section'>
      <Nav />
      <div className='loginContainer'>
        <h3 className='login-h3'>Login</h3>
        <form className='L-form' onSubmit={handleSubmit}>
          <input
            required
            className='F-inp'
            type="text"
            placeholder='UserName'
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            required
            className='F-inp'
            type="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='F-btn' type="submit">Login</button>
        </form>
        <div className='links-container'>
          <a href='/forgot-password' className='link'>Forgot Password?</a>
          <Link className='link' to="/signup">Sign UP</Link>
        </div>
      </div>
    </section>
  );
}

export default UserLogin;
