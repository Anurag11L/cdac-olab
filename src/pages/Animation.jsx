import React from 'react';
import { NavLink } from 'react-router-dom';
import LineCanvas from '../components/lineCanvas';
import SampleSimulator from '../components/SampleSimulator';

const Animation = () => {
    
  return (
    <>
        <header>
            <div>
                <a href='/theory' className='logo'>Square Root Spiral</a>
                <nav className='navbar'>
                    <a href='#' className='toggle-button'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a>
                    <ul className='menu'>
                        <NavLink to="/theory" className="nava"><div className='linktitle'>Theory</div></NavLink>
                        <NavLink to="/animation" className="nava"><div className='linktitle'>Animation</div></NavLink>
                        <NavLink to="/simulator" className="nava"><div className='linktitle'>Simulator</div></NavLink>
                        <NavLink to="/selfevaluation" className="nava"><div className='linktitle'>Self-Evaluation</div></NavLink>
                        <NavLink to="/reference" className="nava"><div className='linktitle'>Reference</div></NavLink>
                        <NavLink to="/feedback" className="nava"><div className='linktitle'>FeedBack</div></NavLink>
                    </ul>
                </nav>
            </div>
        </header>
        <div className='title'>
            -ANIMATION-
        </div>
        {/* <LineCanvas></LineCanvas> */}
        {/* <SampleSimulator></SampleSimulator> */}

        
    </>
  );
};

export default Animation;
