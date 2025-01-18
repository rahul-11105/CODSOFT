import React, { useState } from 'react';
import "./signup.css";
import Nav from '../Navbar/Nav';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = response;
      console.log('Backend response:', data);

      if (response.ok) {
        Navigate("/");
        alert('Account created successfully!');
      } else {
        console.log('Signup failed');
        alert(data.message || 'Failed to create an account');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <section className='signup-section'>
      <Nav />
      <div className='signupContainer'>
        <h3 className='signup-h3'>Sign Up</h3>
        <form className='S-form' onSubmit={handleSubmit}>
          <input
            required
            className='F-inp'
            type="text"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
          />
          <input
            required
            className='F-inp'
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            className='F-inp'
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          <input
            required
            className='F-inp'
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className='F-btn' type="submit">Sign Up</button>
        </form>
        <div className='links-container'>
          <p>Already have an account?</p>
          <Link className='link' to="/login">Login</Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
