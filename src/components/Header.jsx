import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Header =() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0];
    const navbar = document.getElementsByClassName('navbar')[0];

    toogleButton.addEventListener('click',() => {
        navbar.classList.toggle('active');
    });

    return (
        <>
        <header>
            <div>
                <a href='/' className='logo'>Square Root Spiral</a>
                <nav className='navbar' >
                    <a href='#' className='toggle-button'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a> 
                    <ul className='menu'>
                        <NavLink to="/theory" className="nava">Theory</NavLink>
                        <NavLink to="/animation" className="nava">Animation</NavLink>
                        <NavLink to="/simulator" className="nava">Simulator</NavLink>
                        <NavLink to="/selfevaluation" className="nava">Self-Evaluation</NavLink>
                        <NavLink to="/reference" className="nava">Reference</NavLink>
                        <NavLink to="/feedback" className="nava">FeedBack</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
        <div>Hii</div>
        </>
    );
};

export default Header;