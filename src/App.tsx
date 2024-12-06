import React, { useEffect, useState } from 'react';
import { SignUp, Login } from './pages';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState<string | boolean>(false);

  // Save token to sessionStorage when it changes
  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  }, [token]);

  // Retrieve token from sessionStorage on component mount
  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken);
        setToken(parsedToken);
      } catch (error) {
        console.error('Error parsing token:', error);
      }
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={<Login setToken={setToken} />} />
        {token ? (
        <Route path={'/homepage'} element={<HomePage token={token}/>} />
        ) : (
        <Route
         path={'/homepage'}
          element={<div>Unauthorized user. Please Login first..</div>}
        />
  )}
      </Routes>
    </div>
  );
};

export default App;
