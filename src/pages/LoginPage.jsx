import React, { useState } from 'react';
import '../App.css';
import {supabase} from '../SupabseClient';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        });          
        console.log(data);
        setToken(data);
        navigate('/homepage')
      if (error) {
        alert(`Error: ${error.message}`);
      }
    } catch (err) {
      console.error('Error during signup:', err);
      alert('An unexpected error occurred. Please try again.');
    }
  }
  

  return (
    <div className='main-container'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
    </div>
  );
};

export default Login;
