import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const HomePage = ({token}) => {
    const navigate = useNavigate();
    function handleChange(){
        sessionStorage.removeItem('token');
        navigate('/');
    }
    return(
        <div>
           <h1>Welcome back, {token.user.user_metadata.full_name}</h1>
           <button onClick={handleChange}>Log Out</button>
        </div>
    )
}

export default HomePage;