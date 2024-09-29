import React, { useState } from 'react'
import './LoginPage.css'

import Dit from '../../../Assets/dit.jpg'

function LoginPage(){
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div className="registration-container">
      <h1>Create account</h1>
       <h5> Already have account? <a href="login.html">Login</a></h5>
      <form onSubmit={handleSubmit}>
        <div className="separation">
        <input id='fullname'
          type="text"
          name="fullName"
          placeholder="Full name"
          value={userDetails.fullName}
          onChange={handleChange}
        />
        <input id='username'
          type="text"
          name="username"
          placeholder="Username"
          value={userDetails.username}
          onChange={handleChange}
        />
        </div>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone no."
          value={userDetails.phoneNumber}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="username"
          placeholder="Username"
          value={userDetails.username}
          onChange={handleChange}
        /> */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={userDetails.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={userDetails.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
      <div className="social-signup">
        <p>or</p>
        <button className="facebook-signup">Sign up with Facebook</button>
        <button className="google-signup">Sign up with Google</button>
      </div>
    </div>
  );
}
export default LoginPage
