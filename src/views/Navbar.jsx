import React, { useState } from 'react';
import toggle from '../assets/toggle.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const navigate = useNavigate()

    const handleToggle = () => {
        setNavToggle(prevToggle => !prevToggle);
    };

    return (
        <nav className="navbar">
            <h1 className="logo">JASWANT</h1>
            <ul className={`nav-list ${navToggle ? 'active' : ''}`}>
                <li onClick={() =>{
                    navigate('/')
                }}>HOME</li>
                <li onClick={() =>{
                    navigate('/projects')
                }}>PROJECTS</li>
                <li onClick={() =>{
                    navigate('/about')
                }}>ABOUT</li>
            </ul>
            <a href="https://www.linkedin.com/in/jaswant-sandhu-22a79a300" target='_blank'>
                <button className="nav-btn">LinkedIn</button>
            </a>    
            <img 
                src={toggle} 
                className="toggle-icon" 
                alt="Toggle Menu" 
                onClick={handleToggle} 
            />
        </nav>
    );
};

export default Navbar;
