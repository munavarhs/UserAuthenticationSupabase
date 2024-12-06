import React, { useState } from 'react';
import '../App.css';
import {supabase} from '../SupabseClient';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
  
      if (error) {
        alert(`Error: ${error.message}`);
      } else {
        alert('Check your email for the verification link...');
      }
    } catch (err) {
      console.error('Error during signup:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  }
  

  return (
    <div className='main-container'>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Fullname:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account?<Link to={'/'}>Login</Link></p>
    </div>
  );
};

export default SignUp;
